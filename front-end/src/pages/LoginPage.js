import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const history = useHistory();

    const onLogInClick = async()=>{
        alert("Log In functionality not implemented")
    }

  return (
    <div className='content-container'>
        <h1>Log In</h1>
        {errorMessage && <div className='fail'>{errorMessage}</div>}
        <input 
            type='email'
            placeholder='example@email.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />

        <hr />
        
        <button
            disabled={!email || !password}
            onClick={onLogInClick}
        >Log In</button>
        <button
            onClick={()=>history.push('/forgot-password')}
        >
            Forgot your password?
        </button>
        <button
            onClick={()=>history.push('/signup')}
        >
            Don't have an account? Sign Up
        </button>
    </div>
  )
}

export default LoginPage