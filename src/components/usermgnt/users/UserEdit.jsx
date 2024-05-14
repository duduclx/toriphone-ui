import React, { useState } from "react";

import {
  Flex,
  Text,
  Divider,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
} from "@chakra-ui/react";

import { useApi } from "../../../services/ApiProvider";

import UserEditUser from "./content/UserEditUser";
import UserEditGeneral from "./content/UserEditGeneral";
import UserEditFallbacks from "./content/UserEditFallbacks";
import UserEditForwards from "./content/UserEditForwards";
import UserEditServices from "./content/UserEditServices";
import UserEditLines from "./content/UserEditLines";
import UserEditGroups from "./content/UserEditGroups";
import UserEditSchedules from "./content/UserEditSchedules";
import UserEditVoicemails from "./content/UserEditVoicemails";
import UserEditSwitchboard from "./content/UserEditSwitchboard";
import UserEditQueues from "./content/UserEditQueues";
import UserEditCallPickup from "./content/UserEditCallPickup";
import UserEditCallPermissions from "./content/UserEditCallPermissions";

const UserEdit = () => {
  const { userCurrent } = useApi();
  const [ userEdited, setUserEdited ] = useState(userCurrent)

  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

  console.log("userEdited", userEdited);

  return (
    <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
      <Text p={2} as="b" fontSize="3xl">
        Modifier {userCurrent.firstname} {userCurrent.lastname}
      </Text>
      <Divider />
      <Flex
        flexDirection="row"
        flex="1"
        p="2"
        flexWrap="wrap"
        overflowX="auto"
        justifyContent="flex-start"
        alignContent="flex-start"
        className="hide-scrollbar"
      >
        <Tabs align="end" mt="4" width="100%">
          <TabList>
            <Tab>Utilisateur</Tab>
            <Tab>Général</Tab>
            <Tab>Non réponse</Tab>
            <Tab>Renvois</Tab>
            <Tab>Services</Tab>
            <Tab>Lignes</Tab>
            <Tab>Groupes</Tab>
            <Tab>Calendrier</Tab>
            <Tab>Messagerie</Tab>
            <Tab>Switchboard</Tab>
            <Tab>Queue</Tab>
            <Tab>Call pickup</Tab>
            <Tab>Autorisations d'appel</Tab>
          </TabList>

          <TabPanels >
            <TabPanel width="50%">
              <UserEditUser userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditGeneral userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditFallbacks userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditForwards userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditServices userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditLines userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditGroups userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditSchedules userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditVoicemails userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditSwitchboard userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditQueues userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditCallPickup userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditCallPermissions userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Box textAlign="end" m="4">
        <Button>mise à jour</Button>
      </Box>
    </Flex>
  );
};

export default UserEdit;
