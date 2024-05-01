import React from 'react'

import {Tr, Td} from "@chakra-ui/react";

const GroupsTableContent = ({group}) => {
  return (
    <Tr>
      <Td>
        {group.name}
      </Td>
      <Td>
        {group.label}
        </Td>
      <Td>
        {group.label}
        </Td>
      <Td>
        {group.extensions[0]?.exten}
      </Td>
      <Td>
      </Td>
    </Tr>
  )
}

export default GroupsTableContent