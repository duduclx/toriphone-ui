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
    Td,
  } from "@chakra-ui/react";

import { useApi } from '../../../../services/ApiProvider';

import AgentsTableContent from './AgentsTableContent';

const AgentsTable = () => {
    const { tenantCurrent, agents, agentsGet } = useApi()

  useEffect(() => {
    if (tenantCurrent) {
        agentsGet();
    }
  }, [tenantCurrent]);

  return (
    <>
    {agents?.items && (
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
              <Th>label</Th>
              <Th>name</Th>
              <Th>type</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {agents.items.length == 0 ? (
              <Tr>
                <Td colSpan="5" textAlign="center">Aucun résultat</Td>
              </Tr>
            ) : (
                agents.items.map((agent, index) => (
                <AgentsTableContent agent={agent} key={index} />
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
    )}
    </>
  )
}

export default AgentsTable