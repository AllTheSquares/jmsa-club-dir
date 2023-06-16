import {Container, Nav, Navbar, Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

export default function Navigation(props: any) {
    return (
        <Navbar className="custom-navbar" bg={props.appearance} variant={props.appearance} expand='lg'>
            <Container>
                <Navbar.Brand href="#home" className="logo" >Club Directory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>

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
                </Navbar.Collapse>
            </Container>
        </Navbar>
)
}