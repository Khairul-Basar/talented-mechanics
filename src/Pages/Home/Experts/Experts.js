import React from 'react';
import Mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import Mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import Mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import Mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const mechanics = [
    {
        img: Mechanic1,
        name:'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: Mechanic2,
        name:'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: Mechanic3,
        name:'Zakaria Smith',
        expertize: '-Alrounder Expert-'
    },
    {
        img: Mechanic4,
        name:'Mariah',
        expertize: '-Coloring Expert-'
    }
]

const Experts = () => {
    return (
        <div className="my-5">
            <h3 className="text-primary">Our Experts</h3>
            <div className="row container mx-auto">
                {
                    mechanics.map(expert => {
                        return <Expert key={expert.name} expert={expert}></Expert>
                    })
                }
            </div>
        </div>
    );
};

export default Experts;