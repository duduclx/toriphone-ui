import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Select,
  Input
} from "@chakra-ui/react";

import { useApi } from "../../../../services/ApiProvider";

const UserAdd = () => {
    const {tenantContextsGet, tenantUsersGroups, tenantSipTemplates, tenantContexts, tenantUserAdd} = useApi();
    const [newUser, setNewUser] = useState({
      auth: {
        email_address: '',
        enabled: true,
        firstname: '',
        lastname: '',
        password: '',
        purpose: 'user',
        username: ''
      },
      firstname: '',
      lastname: '',
      email: '',
      //call_record_enabled: true,
      call_record_incoming_external_enabled: true,
      call_record_incoming_internal_enabled: true,
      call_record_outgoing_external_enabled: true,
      call_record_outgoing_internal_enabled: true,
      //call_transfer_enabled: true,
      //online_call_record_enabled: true,
      outgoing_caller_id: "default"
    })
    //console.log('usgrp', tenantUsersGroups)
    //console.log('templates', tenantSipTemplates)
    console.log('context', tenantContexts)
    //tenantUserAdd({})

    // wazo comm for bill const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']
    const protocoles = ['SIP', 'SCCP', 'CUSTOM']

    const context = tenantContexts.items?.filter((context) => {
        return context.user_ranges.length > 0;
    })
    //console.log('new context', context)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardContentBg = useColorModeValue("cardContentBg.light", "cardContentBg.dark");

  return (
    <>
      <Button onClick={onOpen}>Ajouter</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={cardContentBg}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input 
            placeholder="prénom"
            onChange={(e) => setNewUser({ ...newUser, auth: { ...newUser.auth, firstname: e.target.value } })}/>
            <Input 
            placeholder="nom"
            onChange={(e) => setNewUser({ ...newUser, auth: { ...newUser.auth, lastname: e.target.value } })}/>
            <Input 
            placeholder="email"
            onChange={(e) => setNewUser(prevState => ({
              ...prevState,
              auth: {
                  ...prevState.auth,
                  email_address: e.target.value,
                  username: e.target.value
              },
              email: e.target.value
          }))}/>
            <Input 
            placeholder="mot de passe"
            onChange={(e) => setNewUser({ ...newUser, auth: { ...newUser.auth, password: e.target.value } })}/>
            <Select
            bg={cardContentBg}
            sx={{
                '> option': {
                  background: cardContentBg,
                },
              }}>
                {context.map((item) => (
                    <option value={item.uuid} key={item.uuid}>
                        {item.name}
                    </option>
                ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => tenantUserAdd(newUser)}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserAdd;
