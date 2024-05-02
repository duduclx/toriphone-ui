import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const AgentsTableContent = ({agent}) => {
  return (
    <Tr>
      <Td>{agent.number}</Td>
      <Td>{agent.firstname}</Td>
      <Td>{agent.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default AgentsTableContent