import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useVoicemails = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [voicemails, setVoicemails] = useState({})

    // functions
    const voicemailsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const voicemails = await requester.get('confd/1.1/voicemails?recurse=false')
        setVoicemails(voicemails)
    }

    return { voicemails, voicemailsGet }
}