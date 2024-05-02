import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const SkillsTableContent = ({skill}) => {
  return (
    <Tr>
      <Td>{skill.name}</Td>
      <Td>{skill.label}</Td>
      <Td>{skill.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SkillsTableContent