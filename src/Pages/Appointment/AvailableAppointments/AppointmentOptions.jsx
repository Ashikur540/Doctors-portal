import React from 'react';

export const AppointmentOptions = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card w-96 bg-white shadow-xl place-self-center">
            <div className="card-body text-center">
                <h2 className="card-title text-primary text-center mx-auto">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">

                    <label disabled={slots.length === 0} onClick={() => { setTreatment(appointment) }} htmlFor="my-modal-3" className="btn bg-primary text-base-100">book appointment</label>
                </div>
            </div>
        </div>
    )
}
