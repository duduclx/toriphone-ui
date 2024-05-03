import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useIvrs = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ ivrs, setIvrs ] = useState({})

    // functions
    const ivrsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const ivrsList = await requester.get('confd/1.1/ivr?recurse=false');
        setIvrs(ivrsList)
    }

    return { ivrs, ivrsGet }
}