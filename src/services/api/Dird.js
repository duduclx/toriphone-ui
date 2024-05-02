import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useDird = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ dirdSources, setDirdSources ] = useState({})
    const [ dirdProfiles, setDirdProfiles ] = useState({})

    // functions
    const dirdSourcesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const dirdSourcesList = await requester.get('dird/0.1/sources?recurse=false');
        setDirdSources(dirdSourcesList)
    }

    const dirdProfilesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const dirdProfilesList = await requester.get('dird/0.1/profiles?recurse=false');
        setDirdProfiles(dirdProfilesList)
    }

    return { dirdSources, dirdSourcesGet, dirdProfiles, dirdProfilesGet }
}