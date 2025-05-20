import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());


        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                const userProfile = {
                    email,
                    ...restFormData,
                    creationTime: result.user.metadata?.creationTime,
                    lastSignInTime: result.user.metadata?.lastSignInTime,

                }

                // Save profile info in the database
                fetch('https://coffee-store-server-omega-fawn.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Acount created successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter name" />
                        {/* Address */}
                        <label className="label">Address</label>
                        <input type="text" name='address' className="input" placeholder="Enter your address" />
                        {/* Phone */}
                        <label className="label">Phone</label>
                        <input type="text" name='phone' className="input" placeholder="Enter phone number" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;