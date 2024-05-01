import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useContexts = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ contexts, setContexts ] = useState({})

    // functions
    const contextsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const contexts = await requester.get('confd/1.1/contexts?recurse=false');
        setContexts(contexts)
    }

    return { contexts, contextsGet}
}