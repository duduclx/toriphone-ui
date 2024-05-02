import { useState } from "react";

import { useAuth } from "../AuthProvider";
import { useTenants } from "./Tenants";

export const useSkillsRules = () => {
    // requirements
    const { requester } = useAuth()
    const { tenantCurrent } = useTenants()

    // values
    const [ skillsRules, setSkillsRules ] = useState()

    // functions
    const skillsRulesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const skillsRulesList = await requester.get('confd/1.1/queues/skillrules?recurse=false');
        setSkillsRules(skillsRulesList)
    }

    return { skillsRules, skillsRulesGet }
}