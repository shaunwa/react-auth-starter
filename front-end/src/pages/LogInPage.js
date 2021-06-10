import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const LogInPage = () => {
	const [, setToken] = useToken();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [shouldShowPassword, setShouldShowPassword] = useState(false);
    const history = useHistory();

    const onLogInClicked = async () => {
		const response = await axios.post('http://localhost:8080/api/login', {
			email,
			password,
		});
		const { token } = response.data;
		setToken(token);
		history.push('/');
    }

	return (
        <div className="content-container">
            <h1>Log In</h1>
            <input
                placeholder="someone@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                placeholder="Password"
                type={shouldShowPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)} />
            <button onClick={() => setShouldShowPassword(!shouldShowPassword)}>Show Password</button>
            <button onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
            <button onClick={() => history.push('/signup')}>Don't have an account? Sign up</button>
        </div>
    )
}