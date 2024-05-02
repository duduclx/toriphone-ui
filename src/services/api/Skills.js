import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useSkills = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ skills, setSkills ] = useState()

    // functions
    const skillsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const skillsList = await requester.get('confd/1.1/agents/skills?recurse=false');
        setSkills(skillsList)
    }

    return { skills, skillsGet }
}