import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const PhonebooksTableContent = ({phonebook}) => {
  return (
    <Tr>
      <Td>{phonebook.backend}</Td>
      <Td>{phonebook.name}</Td>
      <Td>{phonebook.uuid}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default PhonebooksTableContent