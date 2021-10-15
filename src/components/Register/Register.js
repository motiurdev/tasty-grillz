import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication()
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const auth = getAuth();

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmitButton = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    setError(error.message)
                    // ...
                });
                console.log(user);

            })
            .catch(error => {
                switch (error.message) {
                    case 'Firebase: Error (auth/email-already-in-use).':
                        error.message = "email-already-in-use"
                        break;
                    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
                        error.message = "Password must be at least 6 character."
                        break;
                }
                setError(error.message)
            })
    }

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