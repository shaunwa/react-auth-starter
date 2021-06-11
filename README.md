NEVER TRUST THE CLIENT SIDE!

Authentication vs. Authorization
- Authentiction = "Is this user who they're claiming to be?"
- Authorization = "Is this user allowed to do what they're trying to do?"

Strategies for User Auth:

1. Knowledge-based auth - 
	- Examples:
		- passwords
		- PINs
		- secret keys
		- security questions
	- Problems:
		- Reliant on users creating good passwords
		- users can forget
		- Sometimes googleable (for security questions)
		
2. Ownership-based auth -
	- Examples:
		- User owns an email address
		- Cell phone
		- OTP fob or apps (Authy)
	- In general, more secure than knowledge-based
	- Problems:
		- Easy to lose!
		- Sometimes reliant on knowledge-based strategies as a back-up

* Multi-factor auth - combines knowledge- and ownership-based strategies

3. Biology-based Authentication
	- Examples:
		- Facial recognition
		- Fingerprints
		- Retina scans


JSON Web Tokens (JWTs):

- Strings that users get from our server when they successfully authenticate
- Encoded JSON objects that contain basic user info
	* Encoded !== Encrypted - 3rd parties can see all the data they contain!
	{
		"userId": "12345",
		"email": "shaun@test.com",
		"permissionsLevel": "admin",
	}
- JWTs are PRIVATE! Treat them with care
- 

The JWT Flow:

1. The user logs in successfully (with username and password)
2. The server uses a secret key to generate a JWT w/ the user's info
3. The server sends JWT to user
4. Our front-end saves this JWT to local storage/cookies/etc.
5. Whenever user makes a server request, they send that token to the server
6. Server verifies that token hasn't been modified, and then checks to make sure that the user is authorized


Basic Email Verification Process:

1. User clicks "create account"
2. Server receives user data and inserts into DB
3. Server generates random hash that the user can't see
4. Server sends email with link & hash to user's provided email
5. User clicks link w/ hash
6. Front-end verifies hash with server
7. If code is legit, server marks user as verified


Basic Reset Password Process:

1. User clicks "forgot password" and is taken to a page where they can enter their email
2. User enters email address and submits, sending their email to the server
3. Server sends an email with a password reset hash link to that email address
4. User clicks the link, and goes to a page where they can enter a new password
5. New password is sent to the server along with the reset hash. If hash matches, user's password is reset
6. User logs in with new password