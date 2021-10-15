import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const auth = getAuth();


    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                switch (error.message) {
                    case 'Firebase: Error (auth/wrong-password).':
                        error.message = "wrong-password"
                        break;
                    case 'Firebase: Error (auth/user-not-found).':
                        error.message = "user-not-found."
                        break;
                }
                setError(error.message)
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });

    }

    return {
        handleSubmitLogin,
        handleChangeEmail,
        handleChangePassword,
        error,
        user,
        logOut
    }
};

export default useFirebase;