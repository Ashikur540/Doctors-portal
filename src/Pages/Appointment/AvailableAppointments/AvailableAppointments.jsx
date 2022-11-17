import {
    useQuery
} from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { BookingModal } from '../BookingModal/BookingModal';
import { AppointmentOptions } from './AppointmentOptions';
export const AvailableAppointments = ({ selectedDate, setSelectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, "PP")

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })



    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    if (isLoading) return <Spinner />

    return (
        <div>
            <p className="text-primary font-medium text-center mt-8">{format(selectedDate, 'PP')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-8 px-4 mx-auto">


                {
                    appointmentOptions.map(appointment => <AppointmentOptions
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}></AppointmentOptions>)
                }
                {
                    treatment && <BookingModal treatment={treatment} refetch={refetch} setTreatment={setTreatment} selectedDate={selectedDate} />
                }
            </div>
        </div>
    )
}
