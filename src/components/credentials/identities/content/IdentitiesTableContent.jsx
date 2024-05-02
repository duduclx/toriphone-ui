import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const IdentitiesTableContent = ({identitie}) => {
  return (
    <Tr>
      <Td>{identitie.username}</Td>
      <Td>{identitie.firstname}</Td>
      <Td>{identitie.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default IdentitiesTableContent