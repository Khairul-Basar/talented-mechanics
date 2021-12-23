import React from 'react';

const Expert = ({expert}) => {
    const {img,name,expertize} = expert
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12 mt-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-info">{expertize}</h5>
        </div>
    );
};

export default Expert;