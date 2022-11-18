import { useEffect, useState } from 'react'

export const useToken = email => {

    const [token, setToken] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("doctors-token", data.token);
                    setToken(data.token)

                }
            })
    }, [email])

    // returning as an array
    return [token];
}