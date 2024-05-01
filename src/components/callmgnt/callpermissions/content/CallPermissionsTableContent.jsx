import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const CallPermissionsTableContent = ({callPermission}) => {
  return (
    <Tr>
      <Td>{callPermission.label}</Td>
      <Td>{callPermission.name}</Td>
      <Td>{callPermission.type}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default CallPermissionsTableContent
