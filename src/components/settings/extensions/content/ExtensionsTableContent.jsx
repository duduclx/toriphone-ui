import React from "react";

import { Tr, Td } from "@chakra-ui/react";

const ExtensionsTableContent = ({ extension }) => {
  return (
    <Tr>
      <Td>{extension.exten}</Td>
      <Td>{extension.context}</Td>
      <Td>actions !!</Td>
    </Tr>
  );
};

export default ExtensionsTableContent;
