import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';

export const signUpRoute = {
	path: '/api/signup',
	method: 'post',
	handler: async (req, res) => {
		const { email, password } = req.body;

		const db = getDbConnection('react-auth-db-jun2021');
		const user = await db.collection('users').findOne({ email });

		if (user) {
			return res.sendStatus(409); // 409 = "Conflict"
		}

		const passwordHash = await bcrypt.hash(password, 10);

		const startingInfo = {
			hairColor: '',
			favoriteFood: '',
			bio: '',
		};

		const result = await db.collection('users').insertOne({
			email,
			isVerified: false,
			passwordHash,
			info: startingInfo,
		});

		const { insertedId } = result;
		
		jwt.sign({
			id: insertedId,
			isVerified: false,
			email,
			info: startingInfo,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '2d',
		},
		(err, token) => {
			if (err) {
				console.log(err);
				res.sendStatus(500)
			}

			res.status(200).send({ token });
		});
	}
}