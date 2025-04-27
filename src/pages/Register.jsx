import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

export default function Register() {

    const {createNewUser , setUser} = useContext(AuthContext)
    const [error,setError] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault()
        //get form data
        const form = new FormData(e.target)
        const name = form. get('name')
        if(name.length < 5){
            setError({...error, name: 'must be more than 5 character long'});
            return;
        }
        const email = form. get('email')
        const photo = form. get('photo')
        const password = form. get('password')
        console.log({name,email,photo, password})

        createNewUser(email,password)
        .then((result) =>{
            const user = result.user
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-4">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" name='name' className="input" placeholder="name" required/>
                        {
                            error.name && (
                                <label className="fieldset-label text-xs text-red-500">{error.name}</label>
                            )
                        }
                        <label className="fieldset-label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="photo-url" required/>

                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 rounded-none">Register</button>
                    </form>
                    <p className='text-center font-semibold'>
                        Already Have An Account ? <Link to='/auth/login' className='text-red-500'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
