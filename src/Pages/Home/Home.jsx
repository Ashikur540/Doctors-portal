import React from 'react'
import { Banner } from '../Banner/Banner'
import { InfoCards } from '../InfoCards/InfoCards'
import { MakeAppointment } from '../MakeAppointment/MakeAppointment'
import Services from '../Services/Services'
import { Testimonial } from '../Testimonial/Testimonial'

const Home = () => {
    return (
        <div className="min-h-screen  xl:mx-20">
            <Banner />
            <InfoCards />
            <Services />
            <MakeAppointment />
            <Testimonial />
        </div>
    )
}

export default Home