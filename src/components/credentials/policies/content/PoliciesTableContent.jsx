import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const PoliciesTableContent = ({policie}) => {
  return (
    <Tr>
      <Td>{policie.name}</Td>
      <Td>{policie.mac}</Td>
      <Td>{policie.model}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default PoliciesTableContent