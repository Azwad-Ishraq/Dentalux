import React from 'react';
import notfoundImg from './notfound.svg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
            <h1>Oops!!!404 Error</h1>
            <h2>Page Not Found!!!</h2>
            <img src={notfoundImg} alt=""/>
        </div>
    );
};

export default NotFound;