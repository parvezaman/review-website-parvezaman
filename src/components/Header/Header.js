import { Container, Nav, Navbar } from "react-bootstrap";

import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
        {/* <Navbar bg="dark" variant="dark" className="fixed-top"> */}
        <Navbar bg="dark" variant="dark">
            <Container >
            <div className="d-lg-flex">
                <div>
                    <Navbar.Brand to="/home">BeProgrammer.org</Navbar.Brand>
                </div>
                {/* <Nav className="me-auto"> */}
                <div>
                    <Nav className="ms-md-auto ">
                    <Link className="me-3 text-decoration-none text-white" to="/home">Home</Link>
                    <Link className="me-3 text-decoration-none text-white" to="/services">Services</Link>
                    <Link className="me-3 text-decoration-none text-white" to="/alumni">Alumni</Link>
                    <Link className="me-3 text-decoration-none text-white" to="/about">About Us</Link>
                    </Nav>
                </div>
            </div>
            </Container>
         </Navbar>
        </div>
    );
};

export default Header;

