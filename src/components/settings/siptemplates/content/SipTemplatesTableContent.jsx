import React from 'react'

import { Tr, Td } from "@chakra-ui/react";

const SipTemplatesTableContent = ({template}) => {
  return (
    <Tr>
      <Td>{template.label}</Td>
      <Td>{}</Td>
      <Td>{}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default SipTemplatesTableContent