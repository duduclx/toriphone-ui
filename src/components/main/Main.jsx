import React, { useState } from "react";
import { ApiProvider } from "../../services/ApiProvider";

import Sidebar from "../sidebar/Sidebar";

import Users from "../usermgnt/users/Users";
import Groups from "../usermgnt/groups/Groups";
import Lines from "../usermgnt/lines/Lines";
import Devices from "../usermgnt/devices/Devices";
import Voicemails from "../usermgnt/voicemails/Voicemails";

import Incalls from "../callmgnt/incalls/Incalls";
import Outcalls from "../callmgnt/outcalls/Outcalls";
import Callfilters from "../callmgnt/callfilters/CallFilters";
import CallPermissions from "../callmgnt/callpermissions/CallPermissions";
import CallPickup from "../callmgnt/callpickup/CallPickup";
import Schedules from "../callmgnt/schedules/Schedules";
import Trunks from "../callmgnt/trunks/Trunks";

import Agents from "../callcenter/agents/Agents";
import Queues from "../callcenter/queues/Queues";
import SkillRules from "../callcenter/skillrules/SkillRules";
import Skills from "../callcenter/skills/Skills";

import Identities from "../credentials/identities/Identities";
import PoliciesGroups from "../credentials/policiesGroups/PoliciesGroups";
import Policies from "../credentials/policies/Policies";
import Ldap from "../credentials/ldap/Ldap";
import ExternalAuth from "../credentials/externalAuth/ExternalAuth";

import Profiles from "../directory/profile/Profiles";
import Sources from "../directory/sources/Sources";
import Phonebooks from "../directory/phonebooks/Phonebooks";

import Conferences from "../services/conferences/Conferences";
import Switchboards from "../services/switchboards/Switchboards";
import Ivrs from "../services/ivrs/Ivrs";
import ParkingLots from "../services/parkingLots/ParkingLots";
import Pagings from "../services/pagings/Pagings";

import Extensions from "../settings/extensions/Extensions";
import Contexts from "../settings/contexts/Contexts";
import SipTemplates from "../settings/siptemplates/SipTemplates";


import { Flex } from "@chakra-ui/react";

const Main = () => {
  const [serverPage, setServerPage] = useState("users");
  return (
    <ApiProvider>
      <Flex flex="1">
        <Sidebar serverPage={serverPage} setServerPage={setServerPage} />
        {serverPage === "users" && <Users />}
        {serverPage === "groups" && <Groups />}
        {serverPage === "lines" && <Lines />}
        {serverPage === "devices" && <Devices />}
        {serverPage === "voicemails" && <Voicemails />}

        {serverPage === "incalls" && <Incalls />}
        {serverPage === "outcalls" && <Outcalls />}
        {serverPage === "callFilters" && <Callfilters />}
        {serverPage === "callPermissions" && <CallPermissions />}
        {serverPage === "callPickup" && <CallPickup />}
        {serverPage === "schedules" && <Schedules />}
        {serverPage === "trunks" && <Trunks />}

        {serverPage === "agents" && <Agents />}
        {serverPage === "queues" && <Queues />}
        {serverPage === "skillrules" && <SkillRules />}
        {serverPage === "skills" && <Skills />}

        {serverPage === "identities" && <Identities />}
        {serverPage === "policiesGroups" && <PoliciesGroups />}
        {serverPage === "policies" && <Policies />}
        {serverPage === "ldap" && <Ldap />}
        {serverPage === "externalAuth" && <ExternalAuth />}

        {serverPage === "profiles" && <Profiles />}
        {serverPage === "sources" && <Sources />}
        {serverPage === "phonebooks" && <Phonebooks />}

        {serverPage === "conferences" && <Conferences />}
        {serverPage === "switchboards" && <Switchboards />}
        {serverPage === "ivrs" && <Ivrs />}
        {serverPage === "parkingLots" && <ParkingLots />}
        {serverPage === "pagings" && <Pagings />}

        {serverPage === "extensions" && <Extensions />}
        {serverPage === "contexts" && <Contexts />}
        {serverPage === "siptemplates" && <SipTemplates />}
      </Flex>
    </ApiProvider>
  );
};

export default Main;
