import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
export default function Headers(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"> 🏠 Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}