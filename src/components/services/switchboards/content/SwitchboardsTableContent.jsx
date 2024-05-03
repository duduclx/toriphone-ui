import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const SwitchboardsTableContent = ({switchboard}) => {
  return (
    <Tr>
      <Td>{switchboard.uuid}</Td>
      <Td>{switchboard.name}</Td>
      <Td>{switchboard.incalls[0].extensions[0].exten}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SwitchboardsTableContent