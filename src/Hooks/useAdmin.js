import { useEffect, useState } from "react";
import { useUrl } from "./useUrl";


// to verify an admin is actually a admin or not
export const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const baseUrl = useUrl();
    useEffect(() => {
        if (email) {
            fetch(`${baseUrl}/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                })
        }

    }, [email])
    return [isAdmin, isAdminLoading]
}



// why arrray???
/*cz this are hooks and hooks different things return kore so sob gulare amra array hisebe return kori .This is the convention

*/
// Why hooks not function???
/*
outside api call hoosse and data fetching nia kaaj hosse so egula generally hook er moddhe kora hoe thake .This is the convention.
And Utility function gula just normal akta kaaj kore dei.

*/