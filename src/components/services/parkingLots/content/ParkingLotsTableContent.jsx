import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const ParkingLotsTableContent = ({parkingLot}) => {
  return (
    <Tr>
      <Td>{parkingLot.name}</Td>
      <Td>{parkingLot.slots_start}</Td>
      <Td>{parkingLot.slots_end}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default ParkingLotsTableContent