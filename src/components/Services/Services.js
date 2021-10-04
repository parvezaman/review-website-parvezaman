import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import "./Services.css";


const Services = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('services-data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1 className="text-center bg-secondary text-white">Our Services</h1>
            <div className="show-card">
            {
                items.map(item => <Cards key={item.id} item={item}></Cards>)
            }
            
            </div>
        </div>
    );
};

export default Services;