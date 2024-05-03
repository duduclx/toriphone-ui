import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useParkingLots = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ parkingLots, setParkingLots ] = useState({})

    // functions
    const parkingLotsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const parkingLotsList = await requester.get('confd/1.1/parkinglots?recurse=false');
        setParkingLots(parkingLotsList)
    }

    return { parkingLots, parkingLotsGet }
}