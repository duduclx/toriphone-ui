import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const IncallsTableContent = ({incalls}) => {
  return (
    <Tr>
      <Td>{incalls.extensions[0].exten}</Td>
      <Td>{incalls.extensions[0].context}</Td>
      <Td>{incalls.destination.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default IncallsTableContent
