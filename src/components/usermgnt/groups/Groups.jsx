import React from 'react'

import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import GroupsTable from './content/GroupsTable';

const Groups = () => {
  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
  return (
    <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
        <Text p={2} as='b' fontSize='3xl'>Liste groupes de sonnerie</Text>
        <Divider />
        <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
        <GroupsTable />
        </Flex>
    </Flex>
  )
}

export default Groups