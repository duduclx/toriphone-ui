import React from "react";

import { Tr, Td } from "@chakra-ui/react";

const DevicesTableContent = ({ device }) => {
  return (
    <Tr>
      <Td>{device.ip}</Td>
      <Td>{device.mac}</Td>
      <Td>{device.model}</Td>
    </Tr>
  );
};

export default DevicesTableContent;
