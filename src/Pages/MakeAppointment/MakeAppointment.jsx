import React from 'react'
import docbg from "../../Assets/images/appointment.png"
import doc from "../../Assets/images/doctor.png"
import { PrimaryButton } from '../../Components/Small/PrimaryButton'
export const MakeAppointment = () => {
    return (
        <div style={
            {
                background: `url(${docbg})`
            }
        }>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doc} alt="" className="w-1/2 rounded-lg shadow-2xl -mt-64" />
                    <div>
                        <p className="font-semibold text-primary">Appointment</p>
                        <h1 className="text-5xl font-bold text-base-100">Make an appointment Today</h1>
                        <p className="py-6 base-100">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Make An appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
