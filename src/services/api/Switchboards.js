import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useSwitchboards = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ switchboards, setSwitchboards ] = useState({})

    // functions
    const switchboardsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const switchboardsList = await requester.get('confd/1.1/switchboards?recurse=false');
        setSwitchboards(switchboardsList)
    }

    return { switchboards, switchboardsGet }
}