import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const ConferencesTableContent = ({conference}) => {
  return (
    <Tr>
      <Td>{conference.id}</Td>
      <Td>{conference.name}</Td>
      <Td>{conference?.extensions[0].exten}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default ConferencesTableContent