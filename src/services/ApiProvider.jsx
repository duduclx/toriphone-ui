import React, { useState, useContext, createContext, useEffect } from "react";

import { useAuth } from "./AuthProvider";
import AppLoader from "../pages/AppLoader";

const ApiContext = createContext();

export const useApi = () => {
    return useContext(ApiContext);
}

import { useInfos } from "./api/Info";
import { useTenants } from "./api/Tenants";
import { useUsers } from "./api/Users";
import { useGroups } from "./api/Groups";
import { usePolicies } from "./api/Policies";
import { useContexts } from "./api/Contexts";
import { useSipTemplates } from "./api/SipTemplates";
import { useExtensions } from "./api/Extensions";
import { useVoicemails } from "./api/Voicemails";
import { useDevices } from "./api/Devices";
import { useLines } from "./api/Lines";
import { useIncalls } from "./api/Incalls";
import { useOutcalls } from "./api/Outcalls";
import { useTrunks } from "./api/Trunks";
import { useSchedules } from "./api/Schedules";
import { useCallpickup } from "./api/Callpickup";
import { useCallPermissions } from "./api/CallPermissions";

export const ApiProvider = ({children}) => {
    const { user } = useAuth();
    const [ isLoading, setIsLoading ] = useState(true)
    const { serverInfos, serverInfosGet } = useInfos()
    const { tenants, tenantsGet, tenantCurrent, setTenantCurrent } = useTenants()
    const { users, usersGet, userCreate } = useUsers()
    const { groups, groupsGet } = useGroups()
    const { policies, policiesGet } = usePolicies()
    const { contexts, contextsGet } = useContexts()
    const { sipTemplates, sipTemplatesGet } = useSipTemplates()
    const { extensions, extensionsGet } = useExtensions()
    const { voicemails, voicemailsGet } = useVoicemails()
    const { devices, devicesGet } = useDevices()
    const { lines, linesGet } = useLines()
    const { incalls, incallsGet } = useIncalls()
    const { outcalls, outcallsGet } = useOutcalls()
    const { trunks, trunksGet } = useTrunks()
    const { schedules, schedulesGet } = useSchedules()
    const { callpickups, callpickupsGet } = useCallpickup()
    const { callPermissions, callPermissionsGet } = useCallPermissions()

    const ALPHANUMERIC_POOL = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Fonction pour générer une chaîne aléatoire
    const generateString = (length = 8) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += ALPHANUMERIC_POOL.charAt(Math.floor(Math.random() * ALPHANUMERIC_POOL.length));
        }
        return result;
    };

    const userCreateLineSip = () => {
        const name = generateString()

    }

    useEffect(() => {
        if (tenantCurrent) {
            usersGet()
            contextsGet()
            extensionsGet()
            groupsGet()
            sipTemplatesGet()
        }
    }, [tenantCurrent]);

    useEffect(() => {
        const fetchData = async () => {
            await serverInfosGet()
            await tenantsGet()
            await contextsGet()
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
        users,
        userCreate,
        groups,
        groupsGet,
        policies,
        policiesGet,
        contexts,
        contextsGet,
        sipTemplates,
        sipTemplatesGet,
        extensions,
        extensionsGet,
        devices,
        devicesGet,
        voicemails,
        voicemailsGet,
        lines,
        linesGet,
        incalls,
        incallsGet,
        outcalls,
        outcallsGet,
        trunks,
        trunksGet,
        schedules,
        schedulesGet,
        callpickups,
        callpickupsGet,
        callPermissions,
        callPermissionsGet
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