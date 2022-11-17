import React from 'react'
import clock from "../../Assets/icons/clock.svg"
import loc from "../../Assets/icons/marker.svg"
import phone from "../../Assets/icons/phone.svg"
import { Infocard } from './Infocard'
export const InfoCards = () => {


    const cardData = [
        {
            id: 1,
            name: "Opening hours",
            desc: "Lorem Ipsum is simply dummy text of the pri ",
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: "Visit our location",
            desc: "Brooklyn, NY 10036, United States",
            icon: loc,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: "Contact us now",
            desc: "0198332443",
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 mb-10">
            {
                cardData.map(card => <Infocard card={card} key={card.id}></Infocard>)
            }
        </div>
    )
}
