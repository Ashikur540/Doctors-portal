import React from 'react'
import { useRouteError } from "react-router-dom"
const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <p className="text-error font-semibold text-3xl">Sorry! Something went wrong</p>
            <p className="text-error  text-2xl">{error.statusText || error.message}</p>

        </div>
    )
}

export default ErrorPage