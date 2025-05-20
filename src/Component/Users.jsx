import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Users = () => {
    const inititalUsers = useLoaderData();
    const [users, setUsers] = useState(inititalUsers);
    const { deleteuser } = useContext(AuthContext);

    const deleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-omega-fawn.vercel.app/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.isConfirmed && result.value) {
                            const password = result.value;
                            deleteuser(password)
                                .then(() => {
                                    Swal.fire("Deleted!", "User has been deleted.", "success");
                                    const remainingUser = users.filter(user => user._id !== id);
                                    setUsers(remainingUser);
                                })
                                .catch(error => {
                                    console.error(error);
                                    Swal.fire("Error", error.message, "error");
                                });
                        }
                    });


            }
        });
    }
    return (
        <div>
            <h2 className="text-3xl">Users: {inititalUsers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.address}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.phone}
                                </td>
                                <td>{user.email}</td>
                                <th>
                                    <button className="btn btn-xs">V</button>
                                    <button className="btn btn-xs">E</button>
                                    <button onClick={() => deleteUser(user._id)} className="btn btn-xs">X</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;