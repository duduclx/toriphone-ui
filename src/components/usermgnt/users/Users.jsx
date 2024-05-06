import React from "react";

import { Flex, Text, Divider, useColorModeValue } from "@chakra-ui/react";

import UserAdd from "./header/UserAdd";
import UserAddButton from "./header/UserAddButton";
import UsersTable from "./content/UsersTable";

const Users = () => {
  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

  return (
    <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
      <Text p={2} as="b" fontSize="3xl">
        Liste utilisateurs
      </Text>
      <Divider />
      <Flex m="4" justifyContent="flex-end">
        <UserAddButton />
      </Flex>
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
        <UsersTable />
      </Flex>
    </Flex>
  );
};

export default Users;
