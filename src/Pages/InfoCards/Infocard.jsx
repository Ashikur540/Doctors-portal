import React from 'react';

export const Infocard = ({ card }) => {
    const { id, name, desc, icon, bgClass } = card;
    return (
        <div>
            <div className={`card w-96 glass ${bgClass} flex flex-row items-center mx-auto`}>
                <figure className="pl-4"><img src={icon} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>

                </div>
            </div>
        </div>
    )
}
