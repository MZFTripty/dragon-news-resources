/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setloading] =useState(true)
    console.log(loading,user)

    const createNewUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setloading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}
