import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useIdentities = () => {
     // requirements
     const { requester } = useAuth()
     const { tenantCurrent } = useTenants()
 
     // values
     const [ identities, setIdentities ] = useState({})
 
     // functions
     const identitiesGet = async () => {
         requester.setTenant(tenantCurrent.uuid)
         const identitiesList = await requester.get('auth/0.1/users?recurse=false');
         setIdentities(identitiesList)
     }
 
     return { identities, identitiesGet }
}