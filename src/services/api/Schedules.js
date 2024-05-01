import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useSchedules = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ schedules, setSchedules ] = useState()

    // functions
    const schedulesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const schedulesList = await requester.get('confd/1.1/schedules?recurse=false');
        setSchedules(schedulesList)
    }

    return { schedules, schedulesGet }
}