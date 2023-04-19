import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.comfig';
export const authentication = createContext(null)
const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider

    const createUserWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInwithEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createUserWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setIsLoading(false)
        })
        return () => {
            return unsuscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const userAuth = {
        createUserWithEmail,
        createUserWithGoogle,
        logInwithEmail,
        currentUser,
        logOut,
        isLoading

    }
    return (
        <>
            <authentication.Provider value={userAuth}>
                {children}
            </authentication.Provider>
        </>
    );
};

export default AuthProvider;