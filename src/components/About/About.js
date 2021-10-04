import React, { useEffect, useState } from 'react';
import ShowAboutUs from '../ShowAboutUs/ShowAboutUs';
import './About.css';

const About = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch('aboutUs.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div>
            <h1 className="text-center">The people behind your servise</h1>
            <div className="show-about">
                {
                    instructors.map(instructor => <ShowAboutUs  key={instructor.id} instructor={instructor}></ShowAboutUs>)
                }
            </div>

        </div>
    );
};

export default About;