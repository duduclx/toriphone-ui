import { useState } from "react"

import { useAuth } from "../AuthProvider"
import { useTenants } from "./Tenants"

export const useGroups = () => {
    // requirements
    const {requester} = useAuth()
    const {tenantCurrent} = useTenants()

    // values
    const [groups, setGroups] = useState({}) // groupes de sonnerie

    // functions
    const groupsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const groupsList = await requester.get('confd/1.1/groups?recurse=false');
        setGroups(groupsList)
    }

    return {groups, groupsGet}
}