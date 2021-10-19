import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {setUser,signInUsingGoogle} = useAuth()
    const auth = getAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
        const signInUser = (e) => {
            e.preventDefault()
            signInWithEmailAndPassword(auth,email,password)
            .then(result => {
                setUser(result.user)
                console.log(result.user)
            })
        }
        const handleEmailchange = (e) => {
            setEmail(e.target.value)
        }
        const handlePasswordlchange = (e) => {
            setPassword(e.target.value)
        }




    return (
        <div className='register'>
            
        <form onSubmit={signInUser} className='form'>
            <h1>Please Login</h1>
            <input onBlur={handleEmailchange} type="email" placeholder='Enter Your Email' />
            <input onBlur={handlePasswordlchange} type="password" placeholder='Enter Your Password'/>
            <Link className='reg-link' to='/login'>Not a member?Signup Now</Link>
           <span>
           <button className='reg-btn' type='submit'>Login</button>
           <button type='button' onClick={signInUsingGoogle} className='reg-btn'>Sign in using Google</button>
           </span>
        </form>
    </div>
    );
};

export default Login;