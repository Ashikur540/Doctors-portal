import React from 'react'

export const SingleTesti = ({ review }) => {
    const { img, reviewtext, name, location } = review
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-start">

                    <p>{reviewtext}</p>
                    <figure className="card-actions  space-x-2 ">
                        <img src={img} alt="" className="rounded-full ring ring-offset-2 ring-blue-700 w-12 my-2 ml-2" />
                        <div className="flex flex-col">
                            <h3 className="text-md font-semibold">{name}</h3>
                            <h3 className="text-md">{location}</h3>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    )
}
