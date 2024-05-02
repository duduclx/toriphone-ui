import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const usePoliciesGroups = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ policiesGroups, setPoliciesGroups ] = useState()

    // functions
    const policiesGroupsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const policiesGroupsList = await requester.get('auth/0.1/groups?recurse=false');
        setPoliciesGroups(policiesGroupsList)
    }

    return { policiesGroups, policiesGroupsGet }
}