import { Container, Nav, Navbar } from "react-bootstrap";

import React from 'react';

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/home">BeProgrammer.org</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/alumni">Alumni</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
            </Container>
         </Navbar>
        </div>
    );
};

export default Header;

