import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useQueues = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ queues, setQueues ] = useState()

    // functions
    const queuesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const queuesList = await requester.get('confd/1.1/queues?recurse=false');
        setQueues(queuesList)
    }

    return { queues, queuesGet }
}