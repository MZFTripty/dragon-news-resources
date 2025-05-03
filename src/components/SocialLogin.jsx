
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import React from 'react'
import { FaGithub, FaGoogle } from "react-icons/fa";
import auth from '../firebase/firebase.config';

export default function SocialLogin() {
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            console.log(result)
        })
        .catch(error =>{
            console.log('ERROR', error)
        })
    }
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle />Login With Google
                </button>
                <button className="btn">
                    <FaGithub></FaGithub> Login With GitHub
                </button>
            </div>
        </div>
    )
}
