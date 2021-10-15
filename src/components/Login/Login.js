import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { handleSubmitLogin, handleChangeEmail, handleChangePassword, error } = useFirebase()
    return (
        <div className="container">
            <div className="w-25 mx-auto">
                <Form onSubmit={handleSubmitLogin}>
                    <h1 className="text-center py-5">Login Form</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" className="bg-light" onBlur={handleChangeEmail} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Password" className="bg-light" onBlur={handleChangePassword} />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: "hsl(348deg 95% 54%)", border: "none" }}>
                        Login
                    </Button>
                    <Link style={{ textDecoration: "none", color: "hsl(348deg 95% 54%)", textAlign: "center", padding: "10px", display: "block" }} to="/register"><p>Create New Account?</p></Link>
                </Form>
            </div>
        </div>
    );
};

export default Login;