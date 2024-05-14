import React from 'react'
import { Input, Text, Box, Flex } from '@chakra-ui/react'

const UserEditFallbacks = ({userEdited, setUserEdited}) => {

  // Component for Voicemail type
const VoicemailDestination = ({ data }) => (
  <Box>
    <Text>Voicemail ID:</Text>
    <Input value={data.voicemail_id} readOnly />
    <Text>Voicemail Name:</Text>
    <Input value={data.voicemail_name} readOnly />
    <Text>Skip Instructions:</Text>
    <Input value={data.skip_instructions ? 'Yes' : 'No'} readOnly />
  </Box>
)

// Component for Queue type
const QueueDestination = ({ data }) => (
  <Box>
    <Text>Queue ID:</Text>
    <Input value={data.queue_id} readOnly />
    <Text>Queue Label:</Text>
    <Input value={data.queue_label || 'No label'} readOnly />
  </Box>
)

// Component for User type
const UserDestination = ({ data }) => (
  <Box>
    <Text>User ID:</Text>
    <Input value={data.user_id} readOnly />
    <Text>User Name:</Text>
    <Input value={`${data.user_firstname} ${data.user_lastname}`} readOnly />
  </Box>
)

// Component for Switchboard type
const SwitchboardDestination = ({ data }) => (
  <Box>
    <Text>Switchboard UUID:</Text>
    <Input value={data.switchboard_uuid} readOnly />
    <Text>Switchboard Name:</Text>
    <Input value={data.switchboard_name} readOnly />
  </Box>
)

const renderDestination = (destination) => {
  switch (destination.type) {
    case 'voicemail':
      return <VoicemailDestination data={destination} />
    case 'queue':
      return <QueueDestination data={destination} />
    case 'user':
      return <UserDestination data={destination} />
    case 'switchboard':
      return <SwitchboardDestination data={destination} />
    default:
      return <Text>Unknown destination type</Text>
  }
}

  return (
    <Flex flexDirection="column">
      <Text>busy :</Text>
      <Box mb={4}>
        {renderDestination(userEdited.fallbacks.busy_destination)}
      </Box>
      
      <Text>congestion :</Text>
      <Box mb={4}>
        {renderDestination(userEdited.fallbacks.congestion_destination)}
      </Box>
      
      <Text>fail :</Text>
      <Box mb={4}>
        {renderDestination(userEdited.fallbacks.fail_destination)}
      </Box>
      
      <Text>no answer :</Text>
      <Box mb={4}>
        {renderDestination(userEdited.fallbacks.noanswer_destination)}
      </Box>
    </Flex>
  )
}

export default UserEditFallbacks
