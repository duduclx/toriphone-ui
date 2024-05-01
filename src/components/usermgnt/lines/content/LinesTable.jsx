import React, {useEffect} from 'react'

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

import { useApi } from '../../../../services/ApiProvider';

  import LinesTablesContent from './LinesTablesContent';

const LinesTable = () => {
    const { tenantCurrent, lines, linesGet } = useApi();

    useEffect(() => {
      if (tenantCurrent) {
        linesGet();
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
                    <Th>Number</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {lines?.items &&
                    lines.items.map((line, index) => (
                      <LinesTablesContent line={line} key={index} />
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </>
    )
}

export default LinesTable