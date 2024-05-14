import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditQueues = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      {userEdited.queues.map((queue, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={queue.name} />
          <Text>uuid :</Text>
          <Input
          value={queue.uuid}
           />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditQueues