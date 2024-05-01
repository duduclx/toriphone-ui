import React from 'react'
import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import CallPermissionsTable from './content/CallPermissionsTable';

const CallPermissions = () => {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    return (
      <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
          <Text p={2} as='b' fontSize='3xl'>Call Permissions</Text>
          <Divider />
          <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
            <CallPermissionsTable />
          </Flex>
      </Flex>
    )
}

export default CallPermissions