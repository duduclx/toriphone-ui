import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const CallPickupTableContent = ({callpickup}) => {
  return (
    <Tr>
      <Td>{callpickup.label}</Td>
      <Td>{callpickup.name}</Td>
      <Td>{callpickup.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default CallPickupTableContent
