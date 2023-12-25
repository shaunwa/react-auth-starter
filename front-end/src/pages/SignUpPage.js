import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const history = useHistory();

    const onSignUpClick = async()=>{
        alert("Log In functionality not implemented")
    }

  return (
    <div className='content-container'>
        <h1>Sign Up</h1>
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
        <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <hr />

        <button
            disabled={!email || !password || password !== confirmPassword}
            onClick={onSignUpClick}
        >
            Sign Up
        </button>
        <button
            onClick={()=>history.push('/login')}
        >
            Already have an account? Log In
        </button>
    </div>
  )
}

export default SignUpPage;