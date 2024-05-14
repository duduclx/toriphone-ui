import React from 'react'
import { Input, Text, Flex } from '@chakra-ui/react'

const UserEditGeneral = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      <Text>portable :</Text>
        <Input
        value={userEdited.mobile_phone_number}
        />
        <Text>temps de sonnerie :</Text>
        <Input
        value={userEdited.ring_seconds}
        />
        <Text>music on hold :</Text>
        <Input
        value={userEdited.music_on_hold}
        />
        <Text>subroutine :</Text>
        <Input
        value={userEdited.preprocess_subroutine}
        />
        <Text>appels simultanés :</Text>
        <Input
        value={userEdited.simultaneous_calls}
        />
    </Flex>
  )
}

export default UserEditGeneral
