import React from 'react';

const ShowAboutUs = (props) => {

    const {name, image, designation} = props.instructor;
    return (
        <div className="container m-5">
            <div>
                <img className="img-fluid w-25 " src={image} alt="" />
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h5>Designation: {designation}</h5>
            </div>
        </div>
    );
};

export default ShowAboutUs;