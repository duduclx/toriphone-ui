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

  import VoicemailsTableContent from './VoicemailsTableContent';

const VoicemailsTable = () => {
    const { tenantCurrent, tenantVoicemails, tenantVoicemailsGet } = useApi();

    useEffect(() => {
      if (tenantCurrent) {
        tenantVoicemailsGet();
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
                    <Th>Nom</Th>
                    <Th>Numéro</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {tenantVoicemails?.items &&
                    tenantVoicemails.items.map((voicemail, index) => (
                      <VoicemailsTableContent voicemail={voicemail} key={index} />
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </>
    )
}

export default VoicemailsTable