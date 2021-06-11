import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';

export const updateUserInfoRoute = {
	path: '/api/users/:userId',
	method: 'put',
	handler: async (req, res) => {
		const { authorization } = req.headers;
		const { userId } = req.params;

		if (!authorization) {
			return res.sendStatus(401);
		}

		const updates = (({
			favoriteFood,
			hairColor,
			bio,
		}) => ({
			favoriteFood,
			hairColor,
			bio,
		}))(req.body);

		const token = authorization.split(' ')[1];

		jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
			if (err) return res.sendStatus(401);

			const { id, isVerified } = decoded;

			if (id !== userId) return res.sendStatus(403);
			if (!isVerified) return res.sendStatus(403);

			const db = getDbConnection('react-auth-db-jun2021');
			const result = await db.collection('users').findOneAndUpdate(
				{ _id: ObjectId(userId) },
				{ $set: { info: updates } },
				{ returnOriginal: false },
			);

			const { email, info } = result.value;

			jwt.sign(
				{ id, email, isVerified, info },
				process.env.JWT_SECRET,
				{ expiresIn: '2d' },
				(err, token) => {
					if (err) {
						return res.sendStatus(500);
					}

					res.status(200).json({ token });
				});
		});
	}
}