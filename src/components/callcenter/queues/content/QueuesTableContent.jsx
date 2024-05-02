import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const QueuesTableContent = ({queue}) => {
    
  return (
    <Tr>
      <Td>{queue.name}</Td>
      <Td>{queue.extensions?.[0].exten}</Td>
      <Td>{queue.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default QueuesTableContent