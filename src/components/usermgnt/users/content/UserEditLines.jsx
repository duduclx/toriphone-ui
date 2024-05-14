import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditLines = ({userEdited, setUserEdited}) => {


  return (
    <Flex flexDirection="column">
      {userEdited.lines.map((line, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={line.name} />
          <Text>context :</Text>
          <Input
          value={line.extensions[0].context} />
          <Text>extension :</Text>
          <Input
          value={line.extensions[0].exten} />
          <Text>position :</Text>
          <Input
          value={line.position} />
          <Button>Delete line</Button>
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditLines
