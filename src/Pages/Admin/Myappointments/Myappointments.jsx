import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
const Myappointments = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    const { data: myappointmentsData = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: () => fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("doctors-token")}`
            }
        }).then(res => res.json())
    })

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myappointmentsData.map((singleBooking, index) => <tr key={singleBooking._id}>
                                <th>{index + 1}</th>
                                <td>{singleBooking.patientName}</td>
                                <td>{singleBooking.treatmentName}</td>
                                <td>{singleBooking.date}</td>
                                <td>{singleBooking.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Myappointments