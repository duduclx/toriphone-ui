import React from "react";
// diviser la sidebar dans les sous dossiers correspondants

import {
  Flex,
  HStack,
  Button,
  IconButton,
  Text,
  Spacer,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import {
  FaCog,
  FaUser,
  FaUserFriends,
  FaPhoneAlt,
  FaVoicemail,
  FaFilter,
  FaMinusCircle,
  FaBan,
  FaUndo,
  FaClock,
  FaServer,
  FaHeadset,
  FaPeopleArrows,
  FaProjectDiagram,
  FaFile,
  FaCrown,
  FaCodeBranch,
  FaUserSecret,
  FaLock
} from "react-icons/fa";
import {
  FaUsers,
  FaArrowRightArrowLeft,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";

import Tenants from "./tenants/Tenants";
import ServerInfos from "./servers/ServerInfos";

import { useAuth } from "../../services/AuthProvider";

const Sidebar = ({ serverPage, setServerPage }) => {
  const sidebarSecondaryBg = useColorModeValue(
    "sidebarSecondaryBg.light",
    "sidebarSecondaryBg.dark"
  );
  const {onLogout, user} = useAuth();

  return (
    <Flex
      flexDirection="column"
      boxShadow="lg"
      height="100vh"
      p={4}
      width="20%"
      bg={sidebarSecondaryBg}
      minWidth="220px"
      gap={10}
    >
      {user && (
        <>
        
        <HStack justifyContent="space-between">
          <ServerInfos />
        </HStack>
          <Tenants />
          <Flex flexDirection="column">
            <Accordion allowToggle>
              <AccordionItem
                borderTop="none"
                borderTopWidth="0"
                borderBottom="none"
                borderBottomWidth="0"
              >
                <AccordionButton>
                  <HStack justifyContent="flex-start" width="100%">
                    <FaUserFriends />
                    <Text>Gestion des utilisateurs</Text>
                    <Spacer />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaUser />}
                    onClick={() => setServerPage("users")}
                    backgroundColor={
                      serverPage === "users"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    utilisateurs
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaUsers />}
                    onClick={() => setServerPage("groups")}
                    backgroundColor={
                      serverPage === "groups"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    groupes de sonnerie
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaArrowRightArrowLeft />}
                    onClick={() => setServerPage("lines")}
                    backgroundColor={
                      serverPage === "lines"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    lignes
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaPhoneAlt />}
                    onClick={() => setServerPage("devices")}
                    backgroundColor={
                      serverPage === "devices"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    téléphones fixes
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaVoicemail />}
                    onClick={() => setServerPage("voicemails")}
                    backgroundColor={
                      serverPage === "voicemails"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    messagerie vocale
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                borderTop="none"
                borderTopWidth="0"
                borderBottom="none"
                borderBottomWidth="0"
              >
                <AccordionButton>
                  <HStack justifyContent="flex-start" width="100%">
                    <FaPhoneAlt />
                    <Text>Gestion des Appels</Text>
                    <Spacer />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaArrowRightLong />}
                    onClick={() => setServerPage("incalls")}
                    backgroundColor={
                      serverPage === "incalls"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    appels entrants
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaArrowLeftLong />}
                    onClick={() => setServerPage("outcalls")}
                    backgroundColor={
                      serverPage === "outcalls"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    appels sortants
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaFilter />}
                    onClick={() => setServerPage("callFilters")}
                    backgroundColor={
                      serverPage === "callFilters"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    Boss secretaire
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaBan />}
                    onClick={() => setServerPage("callPermissions")}
                    backgroundColor={
                      serverPage === "callPermissions"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    droits d'appel
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaUndo />}
                    onClick={() => setServerPage("callPickup")}
                    backgroundColor={
                      serverPage === "callPickup"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    call pickup
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaClock />}
                    onClick={() => setServerPage("schedules")}
                    backgroundColor={
                      serverPage === "schedules"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    schedules
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaServer />}
                    onClick={() => setServerPage("trunks")}
                    backgroundColor={
                      serverPage === "trunks"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    trunks
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                borderTop="none"
                borderTopWidth="0"
                borderBottom="none"
                borderBottomWidth="0"
              >
                <AccordionButton>
                  <HStack justifyContent="flex-start" width="100%">
                    <FaPeopleArrows />
                    <Text>Centre d'appels</Text>
                    <Spacer />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaHeadset />}
                    onClick={() => setServerPage("agents")}
                    backgroundColor={
                      serverPage === "agents"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    agents
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaProjectDiagram />}
                    onClick={() => setServerPage("queues")}
                    backgroundColor={
                      serverPage === "queues"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    queues
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaFile />}
                    onClick={() => setServerPage("skillrules")}
                    backgroundColor={
                      serverPage === "skillrules"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    skill rules
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaCrown />}
                    onClick={() => setServerPage("skills")}
                    backgroundColor={
                      serverPage === "skills"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    skills
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                borderTop="none"
                borderTopWidth="0"
                borderBottom="none"
                borderBottomWidth="0"
              >
                <AccordionButton>
                  <HStack justifyContent="flex-start" width="100%">
                    <FaUserSecret />
                    <Text>credentials</Text>
                    <Spacer />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaCodeBranch />}
                    onClick={() => setServerPage("identities")}
                    backgroundColor={
                      serverPage === "identities"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    identities
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaProjectDiagram />}
                    onClick={() => setServerPage("policiesGroups")}
                    backgroundColor={
                      serverPage === "policiesGroups"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    policies groups
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaLock />}
                    onClick={() => setServerPage("policies")}
                    backgroundColor={
                      serverPage === "policies"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    policies
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaLock />}
                    onClick={() => setServerPage("ldap")}
                    backgroundColor={
                      serverPage === "ldap"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    ldap
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaLock />}
                    onClick={() => setServerPage("externalAuth")}
                    backgroundColor={
                      serverPage === "externalAuth"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    external auth
                  </Button>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                borderTop="none"
                borderTopWidth="0"
                borderBottom="none"
                borderBottomWidth="0"
              >
                <AccordionButton>
                  <HStack justifyContent="flex-start" width="100%">
                    <FaCog />
                    <Text>Paramètres</Text>
                    <Spacer />
                    <AccordionIcon />
                  </HStack>
                </AccordionButton>
                <AccordionPanel>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaCodeBranch />}
                    onClick={() => setServerPage("contexts")}
                    backgroundColor={
                      serverPage === "contexts"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    contexts
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaProjectDiagram />}
                    onClick={() => setServerPage("extensions")}
                    backgroundColor={
                      serverPage === "extensions"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    extensions
                  </Button>
                  <Button
                    variant="ghost"
                    my={1}
                    w="100%"
                    justifyContent="flex-start"
                    leftIcon={<FaFile />}
                    onClick={() => setServerPage("siptemplates")}
                    backgroundColor={
                      serverPage === "siptemplates"
                        ? "var(--chakra-colors-whiteAlpha-200)"
                        : "transparent"
                    }
                  >
                    sip templates
                  </Button>
                  
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
          <Spacer />
          <Button
          onClick={() => onLogout()}>
            logout
          </Button>
        </>
      )}
    </Flex>
  );
};

export default Sidebar;
