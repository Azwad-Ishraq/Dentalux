import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {img,name,des,id} = props.service;
    return (
        <div className='service-item'>
            <img src={img} alt=""/>
           <div className="service-item-text">
           <h2>{name}</h2>
            <p>{des}</p>
           
            <Link className='details-btn' to={`/service/${id}`}>Details</Link>
           </div>
        </div>
    );
};

export default Service;