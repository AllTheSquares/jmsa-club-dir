import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faPencil, faSun} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
// import {useState} from "react";

export default function Navigation(props: any) {
    return (
        <Navbar className="custom-navbar" bg={props.appearance} variant={props.appearance} expand='lg'>
            <Container>
                <Navbar.Brand href="#home" className="logo">Club Directory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search for a club..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="tweaks">
                        <Nav.Link disabled>

                        </Nav.Link>
                        <Nav.Link aria-label="Switch between light and dark mode">
                            <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                        </Nav.Link>
                        <Nav.Link href="#nothing">
                        <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}