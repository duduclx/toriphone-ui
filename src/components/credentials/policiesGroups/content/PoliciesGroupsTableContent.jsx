import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const PoliciesGroupsTableContent = ({policiesGroup}) => {
  return (
    <Tr>
      <Td>{policiesGroup.name}</Td>
      <Td>{policiesGroup.slug}</Td>
      <Td>{policiesGroup.system_managed}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default PoliciesGroupsTableContent