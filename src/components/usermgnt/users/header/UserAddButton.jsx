import React from 'react'

import { Button } from '@chakra-ui/react'

import { useApi } from '../../../../services/ApiProvider'

const UserAddButton = () => {
    const { setServerPage } = useApi()
  return (
    <Button
    onClick={() => setServerPage("userCreate")}>Ajouter</Button>
  )
}

export default UserAddButton