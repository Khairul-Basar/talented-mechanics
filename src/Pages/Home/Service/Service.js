import React from 'react';

const Service = ({service}) => {
    const {name,price,description,img} = service
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>

        </div>
    );
};

export default Service;