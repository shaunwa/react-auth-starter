import { useAutoRedirect } from '../util/useAutoRedirect';

export const PasswordResetSuccess = () => {
	useAutoRedirect('/login', 3000);

	return (
		<div className="content-container">
			<h1>Success!</h1>
			<p>Your password has been reset, please login with your new password</p>
		</div>
	);
}