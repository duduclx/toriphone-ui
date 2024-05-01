import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useTrunks = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ trunks, setTrunks ] = useState()

    // functions
    const trunksGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const trunksList = await requester.get('confd/1.1/trunks?recurse=false');
        setTrunks(trunksList)
    }

    return { trunks, trunksGet }
}