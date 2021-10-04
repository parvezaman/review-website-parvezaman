import React, { useEffect, useState } from 'react';
import ShowAlumni from '../ShowAlumni/ShowAlumni';
import './Alumni.css';

const Alumni = () => {
    const [alumni, setAlumni] = useState([]);

    useEffect(()=>{
        fetch('Alumni.JSON')
        .then(res => res.json())
        .then(data => setAlumni(data))
    },[]);

    return (
        <div>
            <h1 className="text-center text-white bg-secondary p-3">Meet with some of our ex students</h1>
            <div className="show-alumni">
            {
                alumni.map(alumne => <ShowAlumni key={alumne.id} alumne={alumne}></ShowAlumni>)
            }
            </div>
        </div>
    );
};

export default Alumni;