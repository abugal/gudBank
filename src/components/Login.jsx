import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <lebel for='email'>email</lebel>
                <input value={email} type='email' placeholder='yourmail@gmail.com' id='email' name='email' />

                <lebel for='password'>password</lebel>
                <input value={pass} type='password' placeholder='*********' id='password' name='password' />

                <button type='submit'>Log In</button>

            </form>
            <button>Don't have an account? Register here</button>
        </>
    )
}

export default Login