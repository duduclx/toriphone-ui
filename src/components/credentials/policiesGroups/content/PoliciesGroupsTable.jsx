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

import PoliciesGroupsTableContent from './PoliciesGroupsTableContent';

const PoliciesGroupsTable = () => {
    const { tenantCurrent, policiesGroups, policiesGroupsGet } = useApi()
    console.log('sk', policiesGroups)

    useEffect(() => {
      if (tenantCurrent) {
        policiesGroupsGet();
      }
    }, [tenantCurrent]);
  
    return (
      <>
      {policiesGroups?.items && (
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
              {policiesGroups.items.length == 0 ? (
                <Tr>
                  <Td colSpan="5" textAlign="center">Aucun résultat</Td>
                </Tr>
              ) : (
                policiesGroups.items.map((policiesGroup, index) => (
                  <PoliciesGroupsTableContent policiesGroup={policiesGroup} key={index} />
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

export default PoliciesGroupsTable