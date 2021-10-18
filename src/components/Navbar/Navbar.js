import React from 'react';
import './Navbar.css'
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import menu  from '../../menu.png'
const Navbar = () => {
    const {user,logOut} = useFirebase()
    const toggleMenu = () =>{
        const navlinks = document.getElementById('nav-links')
        navlinks.classList.toggle('nav-links-active')
    }
     return (
        <nav className='nav'>


            <div className="logo">
            <img src={logo} alt=""/>
            <h1>Dentalux</h1>
            </div>



            <img onClick={toggleMenu} id='menu' src={menu} alt=""/>
            <div id='nav-links' className="nav-links">
                <NavLink to='/home' className='nav-link'>Home</NavLink>
                <NavLink to='/services' className='nav-link'>Services</NavLink>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                <NavLink to='/register' className='nav-link'>Register</NavLink>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
                {
                    user.email ? 
                    <NavLink to='/profile' className='nav-link'>Profile</NavLink>
                    :
                    <span></span>
                }
                {
                    user.email ? 
                    <NavLink to='/home' className='nav-link'><button className='nav-link-btn' onClick={logOut}>Logout</button></NavLink>
                    :
                    <span></span>
                }
            </div>
        </nav>
    );
};

export default Navbar;