import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

export default function Login() {
    const { userLogin, setUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            // .catch((error)=>{
            //     alert(error.code)
            // })  

            .catch((err) => {
                setError({ ...error, login: err.code })
            })
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-4">
                <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>
                        <label className="fieldset-label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {
                            error.login && (
                                <div className='text-sm text-red-600'>
                                    {error.login}
                                </div>
                            )
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 rounded-none">Login</button>
                    </form>
                    <p className='text-center font-semibold'>
                        Dont’t Have An Account ? <Link to='/auth/register' className='text-red-500'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
