import React from 'react'

import { Tr, Td, IconButton } from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const ProfilesTableContent = ({profile}) => {
  return (
    <Tr>
      <Td>{profile.backend}</Td>
      <Td>{profile.name}</Td>
      <Td>{profile.uuid}</Td>
      <Td>actions</Td>
    </Tr>
  )
}

export default ProfilesTableContent