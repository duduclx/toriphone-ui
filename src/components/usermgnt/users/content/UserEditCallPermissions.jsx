import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditCallPermissions = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      {userEdited.call_permissions.map((permission, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={permission.name} />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditCallPermissions
