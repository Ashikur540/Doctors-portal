import React from 'react'
import quote from "../../Assets/icons/quote.svg"
import people1 from "../../Assets/images/people1.png"
import people2 from "../../Assets/images/people2.png"
import people3 from "../../Assets/images/people3.png"
import { SingleTesti } from './SingleTesti'
export const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: "Jhon Doe",
            img: people1,
            reviewtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima expedita?",
            location: "dhaka"

        },
        {
            _id: 2,
            name: "Aksash Doe",
            img: people2,
            reviewtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima expedita?",
            location: "dhaka"

        },
        {
            _id: 3,
            name: "Jhon Doe",
            img: people3,
            reviewtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minima expedita?",
            location: "dhaka"

        },
    ]

    return (
        <div>
            <div className="flex justify-between px-4">
                <div className="pl-12">
                    <p className="text-primary my-2">Testimonial</p>
                    <h1 className="text-accent font-semibold my4">What our patients says</h1>
                </div>
                <figure>
                    <img src={quote} alt="" className=" w-1/3 md:w-3/5" />
                </figure>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 mb-12">
                {
                    reviews.map(review => <SingleTesti review={review}></SingleTesti>)
                }
            </div>
        </div>
    )
}


