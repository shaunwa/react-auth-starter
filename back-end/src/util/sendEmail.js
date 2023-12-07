import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.REACT_AUTH_SENDGRID_API_KEY);

export const sendEmail = ({
	to, from, subject, text, html,
}) => {
	return sendgrid.send({ to, from, subject, text, html });
}