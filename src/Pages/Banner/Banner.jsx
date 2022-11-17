import React from 'react'
import img from "../../Assets/images/chair.png"
import { PrimaryButton } from '../../Components/Small/PrimaryButton'
export const Banner = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Learn more</PrimaryButton>
                    </div>
                    <img alt="" src={img} className="w-1/2 rounded-lg shadow-2xl " />
                </div>
            </div>
        </div>
    )
}
