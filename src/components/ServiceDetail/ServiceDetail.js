import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'
let url;
const ServiceDetail = () => {
    const {serviceId} = useParams();
    const intId = parseInt(serviceId);
    
    
    const [Services,setServices] = useState([])
    const [filteredService,setFilteredService] = useState({})

   useEffect(()=>{
        fetch('https://api.jsonbin.io/b/616d47bf9548541c29c4cd77')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    useEffect(()=>{
     const foundService =   Services.find(service => service.id === intId)
        setFilteredService(foundService)
     console.log(foundService)
    },[Services])

    

    return (
        <div className='service-detail-container'>
           <div className="service-detail">
                 
                 
                 <img src={filteredService?.img} alt=""/>
              <div className="service-detail-text">
              <h1>{filteredService?.name}</h1>
              <p>{filteredService?.des}</p>
              </div>
          
           
           </div>

           

           
        </div>
    );
};

export default ServiceDetail;