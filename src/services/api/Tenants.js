import { useState } from "react";

import { useAuth } from "../AuthProvider";

export const useTenants = () => {
    // requirements
    const {requester} = useAuth()

    // values
    const [tenants, setTenants] = useState({}); // all tenants
    const [tenantCurrent, setTenantCurrent] = useState({}); // default tenant

    // fonctions
    const tenantsGet = async () => {
        requester.fetchOptions = {}
        const allTenants = await requester.get('auth/0.1/tenants?offset=0')
        setTenants(allTenants)
        setTenantCurrent(allTenants.items[0])
    }

    return { tenants, tenantCurrent, tenantsGet, setTenantCurrent };
};