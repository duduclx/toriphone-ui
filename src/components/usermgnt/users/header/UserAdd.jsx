import React, { useEffect } from "react";
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
    const {tenantContextsGet, tenantUsersGroups, tenantSipTemplates, tenantContexts} = useApi();
    //console.log('usgrp', tenantUsersGroups)
    //console.log('templates', tenantSipTemplates)
    console.log('context', tenantContexts)

    const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']
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
            placeholder="prénom"/>
            <Input 
            placeholder="nom"/>
            <Input 
            placeholder="email"/>
            <Input 
            placeholder="mot de passe"/>
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
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserAdd;
