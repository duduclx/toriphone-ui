import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useCallfilters = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ callfilters, setCallfilters ] = useState()

    // functions
    const callfiltersGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const callfiltersList = await requester.get('confd/1.1/callfilters?recurse=false');
        setCallfilters(callfiltersList)
    }

    return { callfilters, callfiltersGet }
}