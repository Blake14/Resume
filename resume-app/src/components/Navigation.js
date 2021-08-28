import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="http://localhost:3000/">Blake McPherson</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="https://github.com/Blake14">GitHub</Nav.Link>
        <Nav.Link href="www.linkedin.com/in/Blake14">LinkedIn</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
    </div>
);

export default Navigation;