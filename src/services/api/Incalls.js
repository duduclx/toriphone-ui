import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useIncalls = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ incalls, setIncalls ] = useState()

    // functions
    const incallsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const incallsList = await requester.get('confd/1.1/incalls?recurse=false');
        setIncalls(incallsList)
    }

    return { incalls, incallsGet }
}