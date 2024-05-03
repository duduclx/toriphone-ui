import React from 'react'

import { Flex, Text, Divider, useColorModeValue } from '@chakra-ui/react'

import ParkingLotsTable from './content/ParkingLotsTable';

const ParkingLots = () => {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    return (
      <Flex flexDirection="column" flex="1" p={2} bg={pageBg}>
          <Text p={2} as='b' fontSize='3xl'>Parking Lots</Text>
          <Divider />
          <Flex flexDirection="row" flex="1" p="2" flexWrap="wrap" overflowX="auto" justifyContent="flex-start" alignContent="flex-start">
            <ParkingLotsTable />
          </Flex>
      </Flex>
    )
}

export default ParkingLots