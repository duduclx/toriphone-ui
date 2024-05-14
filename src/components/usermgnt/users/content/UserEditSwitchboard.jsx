import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditSwitchboard = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      {userEdited.switchboards.map((switchboard, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={switchboard.name} />
          <Text>uuid :</Text>
          <Input
          value={switchboard.uuid}
           />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditSwitchboard