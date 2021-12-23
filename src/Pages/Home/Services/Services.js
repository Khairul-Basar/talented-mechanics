import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
       <div className="mt-5">
           <h3 className="text-primary mb-4">Our Services</h3>
         <div className="service-container">
            {
                services.map(service => {
                    return <Service key={service.id} service={service}></Service>
                })
            }
        </div>
       </div>
    );
};

export default Services;