import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useCallpickup = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ callpickups, setCallpickups ] = useState()

    // function
    const callpickupsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const callpickupsList = await requester.get('confd/1.1/callpickups?recurse=false');
        setCallpickups(callpickupsList)
    }

    return { callpickups, callpickupsGet }
}