import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useDevices = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [devices, setDevices] = useState({})

    // functions
    const devicesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const devices = await requester.get('confd/1.1/devices?recurse=false')
        setDevices(devices)
    }

    return { devices, devicesGet }
}