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
import BsFilter from "../callmgnt/bsfilters/BsFilter";
import CallPermissions from "../callmgnt/callpermissions/CallPermissions";
import CallPickup from "../callmgnt/callpickup/CallPickup";
import Schedules from "../callmgnt/schedules/Schedules";
import Trunks from "../callmgnt/trunks/Trunks";

import Agents from "../callcenter/agents/Agents";
import Queues from "../callcenter/queues/Queues";
import SkillRules from "../callcenter/skillrules/SkillRules";
import Skills from "../callcenter/skills/Skills";

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
        {serverPage === "bsFilter" && <BsFilter />}
        {serverPage === "callPermissions" && <CallPermissions />}
        {serverPage === "callPickup" && <CallPickup />}
        {serverPage === "schedules" && <Schedules />}
        {serverPage === "trunks" && <Trunks />}

        {serverPage === "agents" && <Agents />}
        {serverPage === "queues" && <Queues />}
        {serverPage === "skillrules" && <SkillRules />}
        {serverPage === "skills" && <Skills />}

        {serverPage === "extensions" && <Extensions />}
        {serverPage === "contexts" && <Contexts />}
        {serverPage === "siptemplates" && <SipTemplates />}
      </Flex>
    </ApiProvider>
  );
};

export default Main;
