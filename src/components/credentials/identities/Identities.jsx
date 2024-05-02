import React from 'react'
import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import IdentitiesTable from './content/IdentitiesTable';

const Identities = () => {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    return (
      <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
          <Text p={2} as='b' fontSize='3xl'>Identities</Text>
          <Divider />
          <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
            <IdentitiesTable />
          </Flex>
      </Flex>
    )
}

export default Identities