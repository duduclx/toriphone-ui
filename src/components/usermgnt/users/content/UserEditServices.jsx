import React from 'react'
import { Input, Text, Flex, Checkbox } from '@chakra-ui/react'

const UserEditServices = ({userEdited, setUserEdited}) => {
  return (
    <Flex flexDirection="column">
      <Text>ne pas déranger :</Text>
        <Checkbox isChecked={userEdited.services.dnd.enabled}></Checkbox>
        <Text>filtrage appel entrant :</Text>
        <Checkbox isChecked={userEdited.services.incallfilter.enabled}></Checkbox>
        <Text>outgoing external call recording :</Text>
        <Checkbox isChecked={userEdited.call_record_outgoing_external_enabled}></Checkbox>
        <Text>outgoing internal call recording :</Text>
        <Checkbox isChecked={userEdited.call_record_outgoing_internal_enabled}></Checkbox>
        <Text>incoming external call recording :</Text>
        <Checkbox isChecked={userEdited.call_record_incoming_external_enabled}></Checkbox>
        <Text>incoming internal call recording :</Text>
        <Checkbox isChecked={userEdited.call_record_incoming_internal_enabled}></Checkbox>
    </Flex>
  )
}

export default UserEditServices
