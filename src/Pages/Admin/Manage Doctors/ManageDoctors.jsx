import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { toast } from "react-hot-toast"
import { useUrl } from '../../../Hooks/useUrl'
import { ConfirmationModal } from '../../Shared/Confirmation modal/ConfirmationModal'
import Spinner from '../../Shared/Spinner/Spinner'
export const ManageDoctors = () => {
    const [deletingDoc, setDeletingDoc] = useState(null)
    const baseUrl = useUrl()
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: () => fetch(`${baseUrl}/doctors`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctors-token')}`
            }
        }).then(res => res.json())
    })

    if (isLoading) return <Spinner />
    const handleDelete = (id, deletingDoc) => {
        const { name } = deletingDoc;
        // console.log(id);
        fetch(`${baseUrl}/doctors/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctors-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} deletion success`);
                    setDeletingDoc(null)
                    refetch();
                }
            })

    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={doctor.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td> <label htmlFor="Confirmation-Modal" onClick={() => { setDeletingDoc(doctor) }} className="btn btn-error btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }

                        {/* <!-- row 2 --> */}

                    </tbody>
                </table>
                {
                    deletingDoc && <ConfirmationModal
                        deletingDoc={deletingDoc}
                        setDeletingDoc={setDeletingDoc}
                        title
                        message
                        handleDelete={handleDelete}
                    />
                }
            </div>
        </>
    )
}
