import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditCallPickup = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      {userEdited.call_pickup_target_users.map((pickup, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={pickup.name} />
          <Text>uuid :</Text>
          <Input
          value={pickup.uuid}
           />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditCallPickup