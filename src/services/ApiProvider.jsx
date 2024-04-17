import React, { useState, useContext, createContext, useEffect } from "react";

import { useAuth } from "./AuthProvider";
import AppLoader from "../pages/AppLoader";

const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
}

export const ApiProvider = ({children}) => {
    const {user, requester} = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [serverInfos, setServerInfos] = useState({})
    const [tenants, setTenants] = useState({})
    const [tenantCurrent, setTenantCurrent] = useState({})
    const [tenantUsers, setTenantUsers] = useState({})
    const [tenantUsersGroups, setTenantUsersGroups] = useState({})
    const [tenantSipTemplates, setTenantsipTemplates] = useState({})
    const [tenantContexts, setTenantContexts] = useState({})
    const [tenantExtensions, setTenantExtensions] = useState({})
    const [tenantGroups, setTenantGroups] = useState({})
    const [tenantLines, setTenantLines] = useState({})
    const [tenantDevices, setTenantDevices] = useState({})
    const [tenantVoicemails, setTenantVoicemails] = useState({})

    const serverInfosGet = async () => {
        const infos = await requester.call('confd/1.1/infos')
        setServerInfos(infos)
    }

    const tenantsGet = async () => {
        requester.fetchOptions = {}
        const allTenants = await requester.call('auth/0.1/tenants?offset=0')
        setTenants(allTenants)
        setTenantCurrent(allTenants.items[0])
    }

    const tenantUsersGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const users = await requester.call('confd/1.1/users?recurse=false');
        setTenantUsers(users)
    }

    const tenantUserAdd = async () => {

        requester.setTenant(tenantCurrent.uuid)

    }

    const tenantUsersGroupsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const groups = await requester.call('auth/0.1/groups?recurse=false');
        setTenantUsersGroups(groups)
    }

    const tenantSipTemplatesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const templates = await requester.call('confd/1.1/endpoints/sip/templates?recurse=false');
        setTenantsipTemplates(templates)
    }

    const tenantContextsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const contexts = await requester.call('confd/1.1/contexts?recurse=false');
        setTenantContexts(contexts)
    }

    const tenantExtensionsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const extensions = await requester.call('confd/1.1/extensions?recurse=false');
        setTenantExtensions(extensions)
    }

    const tenantGroupsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const groups = await requester.call('confd/1.1/groups?recurse=false');
        setTenantGroups(groups)
    }

    const tenantLinesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const lines = await requester.call('confd/1.1/lines?recurse=false');
        setTenantLines(lines)
    }

    const tenantDevicesGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const devices = await requester.call('confd/1.1/devices?recurse=false')
        setTenantDevices(devices)
    }

    const tenantVoicemailsGet = async () => {
        requester.setTenant(tenantCurrent.uuid)
        const voicemails = await requester.call('confd/1.1/voicemails?recurse=false')
        setTenantVoicemails(voicemails)
    }

    useEffect(() => {
        if (tenantCurrent) {
            tenantUsersGet();
            tenantContextsGet()
            tenantExtensionsGet()
            tenantUsersGroupsGet()
            tenantSipTemplatesGet()
        }
    }, [tenantCurrent]);

    useEffect(() => {
        const fetchData = async () => {
            await serverInfosGet()
            await tenantsGet()
            await tenantContextsGet()
            //await tenantUsersGroupsGet()
            //await tenantSipTemplatesGet()
            setIsLoading(false);
        }
        fetchData()
    }, [user])

    const value = {
        serverInfos,
        tenants,
        tenantsGet,
        tenantCurrent,
        setTenantCurrent,
        tenantUsers,
        tenantUsersGet,
        tenantUsersGroups,
        tenantSipTemplates,
        tenantContexts,
        tenantContextsGet,
        tenantExtensions,
        tenantGroups,
        tenantGroupsGet,
        tenantLines,
        tenantLinesGet,
        tenantDevices,
        tenantDevicesGet,
        tenantVoicemails,
        tenantVoicemailsGet
    }

    if (isLoading) {
        return <AppLoader />
      }

  return (
    <ApiContext.Provider value={value}>
        {children}
    </ApiContext.Provider>
  )
}