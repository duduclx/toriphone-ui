import React from 'react'
import { Flex, InputGroup, Input, Text, Checkbox } from '@chakra-ui/react'

const UserCreateStepOne = ({newUser, setNewUser}) => {
  return (
    <Flex flex="1" justifyContent="center">
        <InputGroup flexDirection="column" gap="4" alignSelf="center" width="50%">
        <Text fontSize="xl" textAlign="center" mb="4">Création de l'utilisateur</Text>
        <Input 
            placeholder="prénom"
            onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}/>
            <Input 
            placeholder="nom"
            onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}/>
            <Input 
            placeholder="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/>
            <Input 
            placeholder="mot de passe"
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}/>
        <Checkbox>administrateur si activé mettre wazo_default_admin_policy</Checkbox>
        </InputGroup>
    </Flex>
  )
}

export default UserCreateStepOne