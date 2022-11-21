import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import Spinner from "../../Pages/Shared/Spinner/Spinner";
import { CheckoutForm } from './CheckoutForm/CheckoutForm';
const stripePromise = loadStripe('pk_test_51M6HlTI7CCeNbXLrEsPgVnYMvSgKy5lhERm4aOd8k9vhWp2ce6lKnMNBdRVI6Nsdt5N7IAim1cEXFKgLliWbX5mn00ebrqUMN4');

// console.log(stripePromise);
export const Payment = () => {

    const Bookingdata = useLoaderData();
    const navigation = useNavigation();
    const { price, treatmentName, date, } = Bookingdata
    console.log(price);
    if (navigation.state === "loading") return <Spinner></Spinner>

    return (
        <div>
            <p className="text-2xl text-center my-6">Payment for {treatmentName} fees total <span className="text-success">💲 {price} on {date} </span></p>
            <div className="w-96 h-52 max-w-4xl px-4  border-2">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        Bookingdata={Bookingdata}
                    />
                </Elements>
            </div>
        </div>
    )
}
