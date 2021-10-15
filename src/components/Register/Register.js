import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';
import useFirebase from '../../hooks/useFirebase';

initializeAuthentication()
const Register = () => {

    const { handleSubmitButton, handleChangeName, handleChangeEmail, handleChangePassword, error } = useFirebase()

    return (
        <div className="container">

            <div className="w-25 mx-auto">
                <Form onSubmit={handleSubmitButton}>
                    <h1 className="text-center py-5">Register Form</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" className="bg-light" onBlur={handleChangeName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" className="bg-light" onBlur={handleChangeEmail} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Password" className="bg-light" onBlur={handleChangePassword} required />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: "hsl(348deg 95% 54%)", border: "none" }}>
                        Register
                    </Button>
                    <Link style={{ textDecoration: "none", color: "hsl(348deg 95% 54%)", textAlign: "center", padding: "10px", display: "block" }} to="/login"><p>Already Have an Account?</p></Link>
                </Form>

            </div>
        </div>
    );
};

export default Register;