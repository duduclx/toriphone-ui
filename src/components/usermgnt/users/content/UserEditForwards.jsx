import React from 'react'
import { Input, Text, Flex, Checkbox } from '@chakra-ui/react'

const UserEditForwards = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      <Text>busy :</Text>
      <Checkbox isChecked={userEdited.forwards.busy.enabled}></Checkbox>
        <Input
        value={userEdited.forwards.busy.destination}
        />
        <Text>no answer :</Text>
        <Checkbox isChecked={userEdited.forwards.noanswer.enabled}></Checkbox>
        <Input
        value={userEdited.forwards.noanswer.destination}
        />
        <Text>inconditionnel :</Text>
        <Checkbox isChecked={userEdited.forwards.unconditional.enabled}></Checkbox>
        <Input
        value={userEdited.forwards.unconditional.destination}
        />
    </Flex>
  )
}

export default UserEditForwards