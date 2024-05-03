import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const PagingsTableContent = ({paging}) => {
  return (
    <Tr>
      <Td>{paging.name}</Td>
      <Td>{paging.id}</Td>
      <Td>{paging.number}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default PagingsTableContent