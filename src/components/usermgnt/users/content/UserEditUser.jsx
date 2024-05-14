import React from 'react'
import { Input, Text, Flex, Checkbox } from '@chakra-ui/react'

const UserEditUser = ({userEdited, setUserEdited}) => {

console.log('userEdited', userEdited)

  return (
    <Flex flexDirection="column" flex="1">
      <Text>Prénom :</Text>
        <Input
        value={userEdited.firstname}
        />
        <Text>nom :</Text>
        <Input
        value={userEdited.lastname}
        />
        <Text>caller_id :</Text>
        <Input
        value={userEdited.caller_id}
        />
        <Text>email :</Text>
        <Input
        value={userEdited.email}
        />
        <Text>auth password :</Text>
        <Checkbox isChecked={userEdited.enabled}>activée</Checkbox>
        <Input
        value={userEdited.password}
        />
    </Flex>
  )
}

export default UserEditUser
