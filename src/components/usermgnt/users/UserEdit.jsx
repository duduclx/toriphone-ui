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
import UserEditAnswers from "./content/UserEditAnswers";
import UserEditServices from "./content/UserEditServices";
import UserEditLines from "./content/UserEditLines";
import UserEditGroups from "./content/UserEditGroups";
import UserEditSchedules from "./content/UserEditSchedules";
import UserEditVoicemails from "./content/UserEditVoicemails";
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
        <Tabs align='end' width="100%" mt="4">
          <TabList>
            <Tab>Utilisateur</Tab>
            <Tab>Général</Tab>
            <Tab>Non réponse</Tab>
            <Tab>Services</Tab>
            <Tab>Lignes</Tab>
            <Tab>Groupes</Tab>
            <Tab>Calendrier</Tab>
            <Tab>Messagerie</Tab>
            <Tab>Autorisations d'appel</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <UserEditUser userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditGeneral userEdited={userEdited} setUserEdited={setUserEdited}/>
            </TabPanel>
            <TabPanel>
              <UserEditAnswers userEdited={userEdited} setUserEdited={setUserEdited}/>
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
