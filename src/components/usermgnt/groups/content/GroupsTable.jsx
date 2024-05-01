import React, { useEffect } from 'react'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
    Flex,
  } from "@chakra-ui/react";

  import { useApi } from "../../../../services/ApiProvider";

  import GroupsTableContent from './GroupsTableContent';

const GroupsTable = () => {
    const { tenantCurrent, groups, groupsGet } = useApi();

  useEffect(() => {
    if (tenantCurrent) {
      groupsGet();
    }
  }, [tenantCurrent]);

  return (
    <>
      {tenantCurrent && (
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
                {groups?.items &&
                  groups.items.map((group, index) => (
                    <GroupsTableContent group={group} key={index} />
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
    </>
  )
}

export default GroupsTable