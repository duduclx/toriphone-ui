import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const IncallsTableContent = ({incalls}) => {
  return (
    <Tr>
      <Td>{incalls.label}</Td>
      <Td>{incalls.name}</Td>
      <Td>{incalls.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default IncallsTableContent
