import React from 'react'

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

import SipTemplatesTableContent from './SipTemplatesTableContent';

const SipTemplatesTable = () => {
    const { tenantSipTemplates } = useApi();
  return (
    <>
    {tenantSipTemplates?.items && (
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
            {tenantSipTemplates.items.length == 0 ? (
              <Tr>
                <Td colSpan="5" textAlign="center">Aucun résultat</Td>
              </Tr>
            ) : (
                tenantSipTemplates.items.map((template, index) => (
                <SipTemplatesTableContent template={template} key={index} />
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
    )}
    </>
  );
}

export default SipTemplatesTable