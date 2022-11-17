import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from "react-hot-toast";
import { AuthContext } from '../../../Contexts/AuthProvider';
export const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const date = format(selectedDate, "PP");
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext)

    // console.log(treatment);
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const bookingInfo = {
            selectedDate: date,
            slot: form.slot.value,
            treatmentName: name,
            patientName: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
        }
        console.log(bookingInfo);
        setTreatment(null);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                if (data.acknowledged) {

                    toast.success("booking success");
                    refetch();
                }

                else {
                    toast.error(data.message)
                }
            })
    }
    return (
        <>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form action="" className="grid grid-cols-1 gap-2 mt-12" onSubmit={handleBooking}>
                        <input type="text" value={date} disabled className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Your name" className="input w-full input-bordered" />
                        <input type="email" name="email" defaultValue={user?.email} disabled placeholder="email address" className="input w-full input-bordered" />
                        <input type="tel" name="phone" placeholder="phone" className="input w-full input-bordered" />
                        <input type="submit" value="submit" className="w-full btn my-2" />
                    </form>
                </div>
            </div>
        </>
    )
}
