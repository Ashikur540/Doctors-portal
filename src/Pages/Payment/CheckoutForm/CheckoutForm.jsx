import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUrl } from "../../../Hooks/useUrl";

export const CheckoutForm = ({ Bookingdata }) => {
    const [clientSecret, setClientSecret] = useState("")
    const [successmsg, setSuccessmsg] = useState("")
    const [transId, setTransId] = useState("")
    const [processing, setProcessing] = useState(false)
    const { price, patientName, date, email, _id } = Bookingdata
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const baseUrl = useUrl();
    const navigate = useNavigate();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${baseUrl}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('doctors-token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccessmsg('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            console.log("card info", card);

            const payment = {
                price,
                transactionID: paymentIntent.id,
                email,
                bookingID: _id
            }

            console.log(payment)
            // store payment info in db
            fetch(`${baseUrl}/payments`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('doctors-token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccessmsg("Congratualtions , Your payment is successfull");
                        setTransId(paymentIntent.id);
                        toast.success(successmsg);
                        navigate('/dashboard')
                    }
                })
        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement className="border-2 border-blue-200 py-4 px-3 rounded-md"
                    options={{

                        style: {
                            base: {

                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className="btn btn-sm btn-primary mt-8">
                    Pay
                </button>
            </form>
            <p className="text-error my-2">{cardError}</p>
            {
                successmsg && <p>{successmsg}.Transaction id : {transId}</p>
            }
        </>
    )
}
