import React from 'react';



const ShowAlumni = (props) => {

    const {name, job, location, image} = props.alumne;

    return (
        <div className="border border-secondary m-1 p-3">
            <div>
                <img src={image} alt="" />
            </div>

            <div>
                <h3>Name: {name}</h3>
                <h5>Job: {job}</h5>
                <h5>Location: {location}</h5>
            </div>
        </div>
    );
};

export default ShowAlumni;