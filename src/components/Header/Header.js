import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../all-images/logo2.png'
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <Navbar collapseOnSelect bg="light" expand="lg" sticky="top">
            <Container>
                <NavLink to="/home">
                    <div style={{ width: "150px" }}>
                        <img
                            src={logo}
                            className="d-inline-block align-top img-fluid"
                            alt="React Bootstrap logo"
                        />
                    </div>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home">Home</NavLink>
                        {user.email && <span className="mt-2">{user.displayName}</span>}
                        {user.email ?
                            <button className="signUp-btn mx-2" style={{ border: "none" }} onClick={logOut}>Logout</button> :
                            <NavLink to="/login">Login</NavLink>}
                        <NavLink className="signUp-btn" to="/register">Sign up</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;