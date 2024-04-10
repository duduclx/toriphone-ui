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

import ExtensionsTableContent from './ExtensionsTableContent'

const ExtensionsTable = () => {
    const { tenantExtensions } = useApi();
  return (
    <>
    {tenantExtensions?.items && (
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
              <Th>extension</Th>
              <Th>context</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tenantExtensions.items.length == 0 ? (
              <Tr>
                <Td colSpan="5" textAlign="center">Aucun résultat</Td>
              </Tr>
            ) : (
                tenantExtensions.items.map((extension, index) => (
                <ExtensionsTableContent extension={extension} key={index} />
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

export default ExtensionsTable