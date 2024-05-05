import React, { useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Flex,
  Td,
} from "@chakra-ui/react";

import { useApi } from "../../../../services/ApiProvider";

import UsersTableContent from "./UsersTableContent";

const UsersTable = () => {
  const { tenantCurrent, users, usersGet } = useApi();

  useEffect(() => {
    if (tenantCurrent) {
      usersGet(tenantCurrent);
    }
  }, [tenantCurrent]);


  return (
    <>
    {users?.items && (
    <Flex
      flexDirection="column"
      justifyContent="center"
      flex={1}
      alignItems="center"
      mt={8}
    >
      <TableContainer
        width="100%"
        height="calc(100vh - 240px)"
        overflowY="auto"
      >
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Prénom</Th>
              <Th>Nom</Th>
              <Th>Email</Th>
              <Th>Numéro</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.items.length == 0 ? (
              <Tr>
                <Td colSpan="5" textAlign="center">Aucun résultat</Td>
              </Tr>
            ) : (
              users.items.map((user, index) => (
                <UsersTableContent user={user} key={index} />
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
    )}
    </>
  );
};

export default UsersTable;
