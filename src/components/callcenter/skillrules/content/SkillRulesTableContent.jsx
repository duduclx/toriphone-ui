import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const SkillRulesTableContent = ({skillRule}) => {
  return (
    <Tr>
      <Td>{skillRule.name}</Td>
      <Td>{skillRule.extensions?.[0].exten}</Td>
      <Td>{skillRule.lastname}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SkillRulesTableContent