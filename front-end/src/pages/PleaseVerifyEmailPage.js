import { useAutoRedirect } from '../util/useAutoRedirect';

export const PleaseVerifyEmailPage = () => {
	useAutoRedirect('/', 3000);

	return (
		<div className="content-container">
			<h1>Thanks for Signing Up!</h1>
			<p>
				A verification email has been sent to the email address you provided.
				Please verify your email to unlock the full site features.
			</p>
		</div>
	);
}