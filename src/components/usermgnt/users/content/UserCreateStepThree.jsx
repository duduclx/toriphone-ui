import React from 'react'

import { Checkbox, Flex } from '@chakra-ui/react'

const UserCreateStepThree = ({addVoicemail, setAddVoicemail}) => {

  const handleCheckboxChange = (event) => {
    setAddVoicemail(event.target.checked);
  };

  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <Checkbox 
      checked={addVoicemail}
      onChange={(event) => handleCheckboxChange(event)}>Activer la messagerie</Checkbox>
    </Flex>
  )
}

export default UserCreateStepThree