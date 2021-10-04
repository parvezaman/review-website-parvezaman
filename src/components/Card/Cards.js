import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Cards = (props) => {
    console.log(props);

    const {name, image, price, rating, descriptioin} = props.item;
    return (
        <div className='m-5'>
            <Card style={{ width: '21rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h6>Rating: {rating}</h6>
                <h6>Price: ${price}</h6>
                <small>
                 {descriptioin}
                </small>
                {/* </Card.Text> */}
                <Button variant="primary">See Details</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;