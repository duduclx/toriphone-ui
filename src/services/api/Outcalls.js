import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useOutcalls = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ outcalls, setOutcalls ] = useState()

    // functions
    const outcallsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const outcallsList = await requester.get('confd/1.1/outcalls?recurse=false');
        setOutcalls(outcallsList)
    }

    return { outcalls, outcallsGet }
}