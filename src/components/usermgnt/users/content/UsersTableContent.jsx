import React from 'react'

import {Tr, Td, IconButton} from "@chakra-ui/react";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const UsersTableContent = ({user}) => {
  return (
    <Tr>
      <Td>
        {user.firstname}
      </Td>
      <Td>
        {user.lastname}
        </Td>
      <Td>
        {user.email}
        </Td>
      <Td>
        {user.lines[0]?.caller_id_num}
      </Td>
      <Td>
      <IconButton
        variant="ghost"
        icon={<FaPen />}
        />
        <IconButton
        variant="ghost"
        icon={<FaTrashAlt />}
        />
      </Td>
    </Tr>
  )
}

export default UsersTableContent