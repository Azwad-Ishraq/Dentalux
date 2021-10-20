import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const { setUser, signInUsingGoogle } = useAuth()

    const auth = getAuth()

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'



    // funtion for handeling user sign in using email and pass
    const signInUser = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // setting the user obj to user state
                setUser(result.user)

            })
            .catch(error => {
                // setting the error message to error state 
                setError(error.message)
            })
    }

    // function for getting the user email
    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }

    // function for getting the user password

    const handlePasswordlchange = (e) => {
        setPassword(e.target.value)
    }

    // function for google sign in
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {

                // redirecting user to where the user wanted to go
                history.push(redirect_uri)
            })
    }




    return (
        <div className='register'>

            <form onSubmit={signInUser} className='form'>
                <h1>Please Login</h1>
                <input onBlur={handleEmailchange} type="email" placeholder='Enter Your Email' />
                <input onBlur={handlePasswordlchange} type="password" placeholder='Enter Your Password' />
                <p style={{ color: 'red' }}>{error}</p>
                <Link className='reg-link' to='/login'>Not a member?Signup Now</Link>
                <span>
                    <button className='reg-btn' type='submit'>Login</button>
                    <button type='button' onClick={handleGoogleLogin} className='reg-btn'>Sign in using Google</button>
                </span>
            </form>
        </div>
    );
};

export default Login;