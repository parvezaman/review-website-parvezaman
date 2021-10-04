import { Container, Nav, Navbar } from "react-bootstrap";

import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand to="/home">BeProgrammer.org</Navbar.Brand>
            {/* <Nav className="me-auto"> */}
            <Nav className="ms-md-auto ">
            <Link className="me-5 text-decoration-none text-white" to="/home">Home</Link>
            <Link className="me-5 text-decoration-none text-white" to="/services">Services</Link>
            <Link className="me-5 text-decoration-none text-white" to="/alumni">Alumni</Link>
            <Link className="me-5 text-decoration-none text-white" to="/about">About Us</Link>
            </Nav>
            </Container>
         </Navbar>
        </div>
    );
};

export default Header;

