import React from 'react'

import {Tr, Td} from "@chakra-ui/react";

const LinesTablesContent = ({line}) => {
  return (
    <Tr>
      <Td>
        {line.protocol}
      </Td>
      <Td>
        {line.name}
        </Td>
      <Td>
        {line.provisioning_extension}
        </Td>
      <Td>
        {line.caller_id_name}
      </Td>
      <Td>
      {line.caller_id_num}
      </Td>
    </Tr>
  )
}

export default LinesTablesContent