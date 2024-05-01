import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const TrunksTableContent = ({trunk}) => {
  return (
    <Tr>
      <Td>{trunk.label}</Td>
      <Td>{trunk.name}</Td>
      <Td>{trunk.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default TrunksTableContent
