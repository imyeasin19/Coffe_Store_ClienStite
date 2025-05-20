import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // firebase login
        loginUser(email,password)
        .then(result =>{
            console.log(result.user);
            const loginInfo = {
                email,
                lastSignInTime: result.user?.metadata?.lastSignInTime

            }
            // update last signin to db
            fetch('https://coffee-store-server-omega-fawn.vercel.app/users',{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('after update patch',data)
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;