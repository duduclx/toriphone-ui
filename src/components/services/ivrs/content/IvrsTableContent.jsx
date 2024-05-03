import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const IvrsTableContent = ({ivr}) => {
  return (
    <Tr>
      <Td>{ivr.uuid}</Td>
      <Td>{ivr.name}</Td>
      <Td>{ivr.id}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default IvrsTableContent