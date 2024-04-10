import React from "react";

import { Tr, Td } from "@chakra-ui/react";

const ContextsTableContent = ({ context }) => {
  return (
    <Tr>
      <Td>{context.label}</Td>
      <Td>{context.name}</Td>
      <Td>{context.type}</Td>
      <Td>actions</Td>
    </Tr>
  );
};

export default ContextsTableContent;
