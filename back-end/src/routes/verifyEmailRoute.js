import { ObjectID } from 'mongodb';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const verifyEmailRoute = {
	path: '/api/verify-email',
	method: 'put',
	handler: async (req, res) => {
		const { verificationString } = req.body;
		console.log(verificationString);

		const db = getDbConnection('react-auth-db-jun2021');
		const result = await db.collection('users')
			.findOne({ verificationString });

			console.log(result);
		
		if (!result) return res.sendStatus(401);

		const { _id: id, email, info } = result;

		await db.collection('users').updateOne(
			{ _id: ObjectID(id) },
			{ $set: { isVerified: true } },
		);

		jwt.sign(
			{ id, email, isVerified: true, info },
			process.env.JWT_SECRET,
			{ expiresIn: '2d' },
			(err, token) => {
				if (err) {
					return res.sendStatus(500);
				}

				res.status(200).json({ token });
			}
		)
	}
}