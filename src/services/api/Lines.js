import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useLines = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [lines, setLines] = useState({})

    // functions
    const linesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const lines = await requester.get('confd/1.1/lines?recurse=false');
        setLines(lines)
    }

    return { lines, linesGet}
}