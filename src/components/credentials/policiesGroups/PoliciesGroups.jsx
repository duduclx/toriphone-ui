import React from 'react'
import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import PoliciesGroupsTable from './content/PoliciesGroupsTable';

const PoliciesGroups = () => {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    return (
      <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
          <Text p={2} as='b' fontSize='3xl'>Policies Groups</Text>
          <Divider />
          <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
            <PoliciesGroupsTable />
          </Flex>
      </Flex>
    )
}

export default PoliciesGroups