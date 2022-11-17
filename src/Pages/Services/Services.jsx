import React from 'react'
import cavity from "../../Assets/images/cavity.png"
import fluroid from "../../Assets/images/fluoride.png"
import wthitening from "../../Assets/images/whitening.png"
import { ServiceCard } from './ServiceCard/ServiceCard'
const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: "Fluoride Treatment",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluroid
        },
        {
            id: 2,
            name: "Cavity Filling",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening",
            desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: wthitening
        },
    ]

    return (
        <div>
            <div className="mx-auto max-w-6xl mt-120 text-center">
                <h1 className="text-2xl text-primary font-semibold my-4">Our services</h1>
                <p className="text-md my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sequi, repudiandae dolores, odio earum suscipit autem eum aliquid atque vel ut nesciunt maxime recusandae odit laboriosam illum? Laudantium, quod similique?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16">
                {
                    serviceData.map(card => <ServiceCard key={card.id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    )
}

export default Services