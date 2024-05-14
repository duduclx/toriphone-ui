import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

const UserEditSchedules = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      {userEdited.schedules.map((schedule, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={schedule.name} />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditSchedules
