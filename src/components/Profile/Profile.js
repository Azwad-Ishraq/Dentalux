import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Profile.css'

const Profile = () => {
    const {user} = useAuth();
    const {displayName,photoURL} = user;
    return (
        <div className='profile-container'>
            <img src={photoURL} alt=""/>
          <h1>Welcome,{displayName}</h1>

        </div>
    );
};

export default Profile;