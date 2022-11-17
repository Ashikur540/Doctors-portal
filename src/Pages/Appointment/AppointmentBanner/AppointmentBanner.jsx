import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from "../../../Assets/images/chair.png";
export const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {


    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt="" />
                    <div className="bg-gray-300 p-4 rounded-lg">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        />
                        {/* <p className="text-md">You have selected date <span className="font-medium">{format(selectedDate, 'PP')}</span></p> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
