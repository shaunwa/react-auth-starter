import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const history = useHistory();

    const onLogin = () => {
        console.log('login');
    }

    return (
        <div className="content-container">
            <h1>Login Page</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input placeholder="test@test.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="password" value={password}  onChange={(event) => setpassword(event.target.value)}/>
            <button disabled={!email || !password}  onClick={onLogin}>Login</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot password</button>
            <button onClick={() => history.push('/signup')}>Don't have an account? Sign up</button>
        </div>
    )
}