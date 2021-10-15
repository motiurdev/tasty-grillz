import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState({})
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
        logOut,
        handleSubmitButton,
        handleChangeName,
    }
};

export default useFirebase;