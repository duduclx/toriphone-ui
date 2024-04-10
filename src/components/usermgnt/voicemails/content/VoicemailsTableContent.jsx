import React from 'react'

import {Tr, Td} from "@chakra-ui/react";

const VoicemailsTableContent = ({voicemail}) => {
  return (
    <Tr>
    <Td>
      {voicemail.name}
    </Td>
    <Td>
      {voicemail.number}
      </Td>
    <Td>
      {voicemail.email}
      </Td>
  </Tr>
  )
}

export default VoicemailsTableContent