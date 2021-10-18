import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Profile.css'

const Profile = () => {
    const {user} = useFirebase();
    const {displayName,email,photoURL} = user;
    return (
        <div className='profile-container'>
            <img src={photoURL} alt=""/>
          <h1>Welcome,{displayName}</h1>

        </div>
    );
};

export default Profile;