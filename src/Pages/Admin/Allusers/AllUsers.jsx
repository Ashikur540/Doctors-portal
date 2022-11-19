import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useUrl } from "../../../Hooks/useUrl";
const AllUsers = () => {
    const baseUrl = useUrl();
    // console.log(baseUrl);
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`${baseUrl}/users`).then(res => res.json())
    })


    const handleMakeAdmin = (id) => {
        fetch(`${baseUrl}/users/admin/${id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== "admin" && <button className="btn btn-xs btn-primary " onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>}</td>
                                <div className="dropdown dropdown-left">
                                    <label tabIndex={0} className="btn btn-xs btn-accent m-1">:</label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><button className="btn  btn-error">Delete</button></li>
                                        <li><button className="btn btn-outline  btn-secondary">Edit</button></li>

                                    </ul>
                                </div>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers