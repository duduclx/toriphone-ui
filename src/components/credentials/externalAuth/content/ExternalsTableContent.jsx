import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const ExternalsTableContent = ({external}) => {
  return (
    <Tr>
      <Td>{external.type}</Td>
      <Td>{external.enabled}</Td>
      <Td>{external.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default ExternalsTableContent