import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useExtensions = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ extensions, setExtensions ] = useState({})

    // functions
    const extensionsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const extensions = await requester.get('confd/1.1/extensions?recurse=false');
        setExtensions(extensions)
    }

    return { extensions, extensionsGet }
}