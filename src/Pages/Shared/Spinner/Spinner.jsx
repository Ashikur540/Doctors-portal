import React from 'react'

const Spinner = () => {
    return (
        <div className=" mt-12">

            <svg width="54" height="54" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-live="polite" aria-busy="true" className="mx-auto">
                <path d="M7 10H3V14H7V10Z" class="fill-indigo-500 animate animate-bounce " />
                <path d="M14 10H10V14H14V10Z" class="fill-indigo-500 animate animate-bounce  [animation-delay:.2s]" />
                <path d="M21 10H17V14H21V10Z" class="fill-indigo-500 animate animate-bounce  [animation-delay:.4s]" />
            </svg>

        </div>
    )
}

export default Spinner