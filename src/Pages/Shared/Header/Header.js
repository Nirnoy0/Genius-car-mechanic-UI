import React from 'react';
import './Header.css';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" className="mb-5">
                <Container>
                    <Navbar.Brand href="#home" className="name">Genius Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className="nav">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="nav">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts" className="nav">Experts</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="nav">Login</Nav.Link>}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Admin
                            </Dropdown.Toggle>


                            <Dropdown.Menu>
                                <Dropdown.Item >
                                    <Nav.Link as={Link} to="/addService" className="nav">Add Service</Nav.Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Nav.Link as={Link} to="/manageServices" className="nav">Manage Services</Nav.Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;