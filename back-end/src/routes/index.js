import { forgotPasswordRoute } from './forgotPasswordRoute';
import { logInRoute } from './logInRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { signUpRoute } from './signUpRoute';
import { testEmailRoute } from './testEmailRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';

export const routes = [
	forgotPasswordRoute,
	logInRoute,
	resetPasswordRoute,
	signUpRoute,
    testRoute,
	updateUserInfoRoute,
	verifyEmailRoute,
];
