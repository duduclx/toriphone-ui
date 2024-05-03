import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const SourcesTableContent = ({source}) => {
  return (
    <Tr>
      <Td>{source.backend}</Td>
      <Td>{source.name}</Td>
      <Td>{source.uuid}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SourcesTableContent