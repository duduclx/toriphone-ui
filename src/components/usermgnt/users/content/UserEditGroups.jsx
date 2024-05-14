import React from 'react'
import { Input, Text, Flex, Checkbox, Box, Button } from '@chakra-ui/react'

import { useApi } from '../../../../services/ApiProvider'

const UserEditGroups = ({userEdited, setUserEdited}) => {

  const { groups } = useApi()
  // should find label instead of name if name have a strange format
  console.log('groups', groups)

  const findLabelByUuid = (uuid) => {
    const group = groups.items.find(item => item.uuid === uuid)
    return group ? group.label : 'Label not found'
  }

  return (
    <Flex flexDirection="column">
      {userEdited.groups.map((group, index) => (
        <Box key={index}>
          <Text>nom :</Text>
          <Input
          value={group.name} />
          <Text>label :</Text>
          <Input
          value={findLabelByUuid(group.uuid)}
           />
          <Text>uuid :</Text>
          <Input
          value={group.uuid} />
        </Box>
      ))}
      
    </Flex>
  )
}

export default UserEditGroups
