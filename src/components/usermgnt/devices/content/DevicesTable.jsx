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

  import DevicesTableContent from './DevicesTableContent';

const DevicesTable = () => {
    const { tenantCurrent, devices, devicesGet } = useApi();

    useEffect(() => {
      if (tenantCurrent) {
        devicesGet();
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
                  {devices?.items &&
                    devices.items.map((device, index) => (
                      <DevicesTableContent device={device} key={index} />
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        )}
      </>
    )
}

export default DevicesTable