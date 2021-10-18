import React from 'react';
import './Team.css'

const Team = () => {
    return (
        <div className='team-container'>
            <h1>Meet The Team</h1>
            <div className="members">
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt=""/>
                    <h3>Dr. Joseph Phillips</h3>
                    <p>Senior Doctor</p>
                </div>
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt=""/>
                    <h3>Dr. Marta Green</h3>
                    <p>Senior Doctor</p>
                </div>
                <div className="member-item">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                    <h3>Dr. Edward Grey</h3>
                    <p>Senior Doctor</p>
                </div>
            </div>
            
        </div>
    );
};

export default Team;