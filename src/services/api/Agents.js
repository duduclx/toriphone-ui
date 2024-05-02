import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useAgents = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ agents, setAgents ] = useState()

    // functions
    const agentsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const agentsList = await requester.get('confd/1.1/agents?recurse=false');
        setAgents(agentsList)
    }

    return { agents, agentsGet }
}