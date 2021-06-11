import { useAutoRedirect } from '../util/useAutoRedirect';

export const PasswordResetFail = () => {
	useAutoRedirect('/login', 3000);

	return (
		<div className="content-container">
			<h1>Fail!</h1>
			<p>Something happened...</p>
		</div>
	);
}