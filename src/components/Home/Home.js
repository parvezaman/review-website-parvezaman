import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import banner from "../../images/banner.jpg";
import Cards from '../Card/Cards';
import "./Home.css";

const Home = () => {

    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('services-data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    const fewItems= items.slice(0,4);
    // console.log(fewItems);
    return (
        <div className="bg-secondary">

        {/* first section */}

        <section className="mb-5 p-5">
        <h1 className="text-white text-center">Be a Programmer</h1>
            <br />
            <br />
            <div className=" container bg-secondary text-white d-lg-flex">
                <div>
                <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Learn JavaScript With World Class Mentors</h3>
                            <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://pbs.twimg.com/profile_images/1417534297037103104/-aGMDn-Z_400x400.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Learn React get Hired!!!</h3>
                            <p>React is a free and open-source front-end JavaScript library for building user interfaces or UI components.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://pbs.twimg.com/profile_images/566507820/C_prog_400x400.png"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Learn C with us</h3>
                            <p>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                </div>

                <div className="p-3">
                    {/* <img src={banner} alt="" />  */}
                    <h1>Learn Programming with us</h1>
                    <br />
                    <ul>
                        <li><h4>World class trainers</h4></li>
                        <li><h4>Hi tech lab facility</h4></li>
                        <li><h4>Regular concept clear sessions</h4></li>
                        <li><h4>Regular boot camp and programming contests</h4></li>
                        <li><h4>Proper assessment of tests and Assignments</h4></li>
                    </ul>
                </div>
            </div>
        </section>


        {/* Second section start */}

        <section >
        <h1 className="text-info text-center text-decoration-underline">We have a lot more for you to offer</h1>
            
            <div className="show-card">
            {
                fewItems.map(item => <Cards 
                    key={item.id}
                    item = {item}
                
                ></Cards>)
            }
            </div>
            
        </section>
        </div>
    );
};

export default Home;