import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const CallfiltersTableContent = ({callfilter}) => {
  return (
    <Tr>
      <Td>{callfilter.label}</Td>
      <Td>{callfilter.name}</Td>
      <Td>{callfilter.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default CallfiltersTableContent