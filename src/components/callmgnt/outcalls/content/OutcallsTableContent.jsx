import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const OutcallsTableContent = ({outcall}) => {
  return (
    <Tr>
      <Td>{outcall.label}</Td>
      <Td>{outcall.name}</Td>
      <Td>{outcall.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default OutcallsTableContent
