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
import { useCallfilters } from "./api/CallFilters";
import { useAgents } from "./api/Agents";
import { useQueues } from "./api/Queues";
import { useSkillsRules } from "./api/SkillsRules";
import { useSkills } from "./api/Skills";
import { useIdentities } from "./api/Identities";
import { usePolicies } from "./api/Policies";
import { usePoliciesGroups } from "./api/PoliciesGroups";
import { useLdap } from "./api/Ldap";
import { useExternals } from "./api/Externals";
import { useDird } from "./api/Dird";
import { usePhonebooks } from "./api/Phonebooks";
import { useConferences } from "./api/Conferences";
import { useSwitchboards } from "./api/Switchboards";
import { useIvrs } from "./api/Ivrs";
import { useParkingLots } from "./api/ParkingLots";
import { usePagings } from "./api/Pagings";
import { useRegistrars } from "./api/Registrars";

export const ApiProvider = ({children}) => {
    // requirements
    const { user } = useAuth();
    // states
    const [ isLoading, setIsLoading ] = useState(true)
    const [ serverPage, setServerPage ] = useState("users");
    // apis
    const { serverInfos, serverInfosGet } = useInfos()
    const { tenants, tenantsGet, tenantCurrent, setTenantCurrent } = useTenants()
    const { users, usersGet, userCreate, userAssociateLine, userCreateVoicemail } = useUsers()
    const { groups, groupsGet } = useGroups()
    const { contexts, contextsGet, contextRange, contextRangeGet } = useContexts()
    const { sipTemplates, sipTemplatesGet } = useSipTemplates()
    const { extensions, extensionsGet } = useExtensions()
    const { voicemails, voicemailsGet } = useVoicemails()
    const { devices, devicesGet } = useDevices()
    const { lines, linesGet, lineCreate } = useLines()
    const { incalls, incallsGet } = useIncalls()
    const { outcalls, outcallsGet } = useOutcalls()
    const { trunks, trunksGet } = useTrunks()
    const { schedules, schedulesGet } = useSchedules()
    const { callpickups, callpickupsGet } = useCallpickup()
    const { callPermissions, callPermissionsGet } = useCallPermissions()
    const { callfilters, callfiltersGet } = useCallfilters()
    const { agents, agentsGet } = useAgents()
    const { queues, queuesGet } = useQueues()
    const { skillsRules, skillsRulesGet } = useSkillsRules()
    const { skills, skillsGet } = useSkills()
    const { identities, identitiesGet } = useIdentities()
    const { policies, policiesGet, policieUserAdd } = usePolicies()
    const { policiesGroups, policiesGroupsGet } = usePoliciesGroups()
    const { ldap, ldapGet } = useLdap()
    const { externalsConfig, externalsConfigGet, externalsServices, externalsServicesGet, externalsConfigList, externalsConfigListGet } = useExternals()
    const { dirdProfiles, dirdProfilesGet, dirdSources, dirdSourcesGet } = useDird()
    const { phonebooks, phonebooksGet } = usePhonebooks()
    const { conferencesContactsList, conferencesContactsListGet } = useConferences()
    const { switchboards, switchboardsGet } = useSwitchboards()
    const { ivrs, ivrsGet } = useIvrs()
    const { parkingLots, parkingLotsGet } = useParkingLots()
    const { pagings, pagingsGet } = usePagings()
    const { registrars, registrarsGet } = useRegistrars()


    useEffect(() => {
        if (tenantCurrent) {
            usersGet()
            contextsGet()
            extensionsGet()
            groupsGet()
            sipTemplatesGet()
            policiesGet()
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
        serverPage,
        setServerPage,
        serverInfos,
        tenants,
        tenantsGet,
        tenantCurrent,
        setTenantCurrent,
        users,
        usersGet,
        userCreate,
        userAssociateLine,
        userCreateVoicemail,
        groups,
        groupsGet,
        contexts,
        contextsGet,
        contextRange,
        contextRangeGet,
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
        lineCreate,
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
        callPermissionsGet,
        callfilters,
        callfiltersGet,
        agents,
        agentsGet,
        queues,
        queuesGet,
        skillsRules,
        skillsRulesGet,
        skills,
        skillsGet,
        identities,
        identitiesGet,
        policies,
        policiesGet,
        policiesGroups,
        policiesGroupsGet,
        policieUserAdd,
        ldap,
        ldapGet,
        externalsConfig,
        externalsConfigGet,
        externalsServices,
        externalsServicesGet,
        externalsConfigList,
        externalsConfigListGet,
        dirdProfiles,
        dirdProfilesGet,
        dirdSources,
        dirdSourcesGet,
        phonebooks,
        phonebooksGet,
        conferencesContactsList,
        conferencesContactsListGet,
        switchboards,
        switchboardsGet,
        ivrs,
        ivrsGet,
        parkingLots,
        parkingLotsGet,
        pagings,
        pagingsGet,
        registrars,
        registrarsGet
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