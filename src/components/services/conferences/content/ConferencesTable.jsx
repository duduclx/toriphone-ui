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

import ConferencesTableContent from './ConferencesTableContent';

const ConferencesTable = () => {
    const { tenantCurrent, conferencesContactsList, conferencesContactsListGet } = useApi()
    //console.log('conferences', conferencesList)

    useEffect(() => {
      if (tenantCurrent) {
        conferencesContactsListGet();
      }
    }, [tenantCurrent]);
  
    return (
      <>
      {conferencesContactsList?.items && (
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
                <Th>id</Th>
                <Th>name</Th>
                <Th>extension</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {conferencesContactsList.items.length == 0 ? (
                <Tr>
                  <Td colSpan="5" textAlign="center">Aucun résultat</Td>
                </Tr>
              ) : (
                conferencesContactsList.items.map((conference, index) => (
                  <ConferencesTableContent conference={conference} key={index} />
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

export default ConferencesTable