import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const SchedulesTableContent = ({schedule}) => {
  return (
    <Tr>
      <Td>{schedule.label}</Td>
      <Td>{schedule.name}</Td>
      <Td>{schedule.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SchedulesTableContent
