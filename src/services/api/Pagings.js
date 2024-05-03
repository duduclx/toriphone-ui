import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const usePagings = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ pagings, setPagings ] = useState({})

    // functions
    const pagingsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const pagingsList = await requester.get('confd/1.1/pagings?recurse=false');
        setPagings(pagingsList)
    }

    return { pagings, pagingsGet }
}