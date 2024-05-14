import React from 'react'
import { Input, Text, Flex } from '@chakra-ui/react'

const UserEditVoicemails = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      <Text>voicemail :</Text>
        <Input
        value={userEdited.voicemail.name}
        />
        <Text>id :</Text>
        <Input
        value={userEdited.voicemail.id}
        />
    </Flex>
  )
}

export default UserEditVoicemails
