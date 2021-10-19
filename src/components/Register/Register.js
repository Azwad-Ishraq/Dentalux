import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'

const Register = () => {
    const {signInUsingGoogle,user,setUser} = useAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('');
    const auth = getAuth();


    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordlchange = (e) => {
        setPassword(e.target.value)
    }



    const createNewUser = (e)  => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
        })
    }
    console.log(user)
    return (
        <div className='register'>
            
            <form onSubmit={createNewUser}  className='form'>
                <h1>Please Register</h1>
                <input onBlur={handleEmailchange} type="email" placeholder='Enter Your Email' />
                <input onBlur={handlePasswordlchange} type="password" placeholder='Enter Your Password'/>
                <Link className='reg-link' to='/login'>Already Have an Account?</Link>
               <span>


               <button className='reg-btn' type='submit'>Register</button>



               <button type='button' onClick={signInUsingGoogle} className='reg-btn'>Sign in using Google</button>
               </span>
            </form>
        </div>
    );
};

export default Register;