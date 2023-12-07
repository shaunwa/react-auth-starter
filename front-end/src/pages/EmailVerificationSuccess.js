import { useAutoRedirect } from '../util/useAutoRedirect';

export const EmailVerificationSuccess = () => {
	useAutoRedirect('/', 3000);

	return (
		<div className="content-container">
			<h1>Success!</h1>
			<p>Thanks for verifying your email, you can now use all the site's features</p>
		</div>
	);
}