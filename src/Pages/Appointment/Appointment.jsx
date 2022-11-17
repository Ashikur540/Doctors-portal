import React, { useState } from 'react';
import { AvailableAppointments } from "../Appointment/AvailableAppointments/AvailableAppointments";
import { AppointmentBanner } from './AppointmentBanner/AppointmentBanner';
export const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className="min-h-screen">

            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate} />
        </div>
    )
}
