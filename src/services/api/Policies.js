import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const usePolicies = () => {
    // requirements
    const {requester} = useAuth()
    const {tenantCurrent} = useTenants()

    // values
    const [policies, setPolicies] = useState({})

    // functions
    const policiesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const groups = await requester.get('auth/0.1/groups?recurse=false');
        setPolicies(groups)
    }

    return {policies, policiesGet}
}