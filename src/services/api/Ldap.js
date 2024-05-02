import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useLdap = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ ldap, setLdap ] = useState({})

    // functions
    const ldapGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const ldapInfos = await requester.get('auth/0.1/backends/ldap');
        setLdap(ldapInfos)
    }

    return { ldap, ldapGet }
}