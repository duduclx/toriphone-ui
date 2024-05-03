import React from 'react'

import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import ConferencesTable from './content/ConferencesTable';

const Conferences = () => {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    return (
      <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
          <Text p={2} as='b' fontSize='3xl'>Conferences</Text>
          <Divider />
          <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
            <ConferencesTable />
          </Flex>
      </Flex>
    )
}

export default Conferences