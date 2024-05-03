import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const usePhonebooks = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ phonebooks, setPhonebooks ] = useState({})

    // functions
    const phonebooksGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const phonebooksList = await requester.get('dird/0.1/phonebooks?recurse=false');
        setPhonebooks(phonebooksList)
    }

    return { phonebooks, phonebooksGet }
}