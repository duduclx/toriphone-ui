import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useCallPermissions = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ callPermissions, setCallPermissions ] = useState()

    // function
    const callPermissionsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const callPermissionsList = await requester.get('confd/1.1/callpermissions?recurse=false');
        setCallPermissions(callPermissionsList)
    }

    return { callPermissions, callPermissionsGet }
}