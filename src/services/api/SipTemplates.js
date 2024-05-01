import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useSipTemplates = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [sipTemplates, setSipTemplates] = useState({})

    // functions
    const sipTemplatesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const templates = await requester.get('confd/1.1/endpoints/sip/templates?recurse=false');
        setSipTemplates(templates)
    }

    return { sipTemplates, sipTemplatesGet}
}