// src/components/Navigation.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// Navigation bar component used across all pages
const Navigation = () => {
    return (
        // Main navbar with dark theme and Bootstrap styling
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                {/* App brand (logo) linking to homepage */}
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    TruthLens
                </Navbar.Brand>
                {/* Toggle for collapsing menu on mobile screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigation links aligned to the right */}
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/instructions">Instructions</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
