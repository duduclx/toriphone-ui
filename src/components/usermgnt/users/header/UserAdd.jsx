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
    const {tenantUsersGroups, sipTemplates, extensions, contexts, userCreate} = useApi();
    const [newUser, setNewUser] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
    const [selectedContext, setSelectedContext] = useState(contexts.items[0].name);
    const [availableExtensions, setAvailableExtensions] = useState([]);

    console.log('tenantSipTemplates', sipTemplates)

    useEffect(() => {
      // Vérifier si selectedContext est défini
      if (selectedContext) {
          // Créer un tableau pour stocker toutes les extensions disponibles
          let allExtens = [];

          console.log('ctx', contexts)
          console.log('tenantext', extensions)
  
          // Parcourir chaque objet user_ranges dans tenantContexts.items
          contexts.items.forEach(item => {
              // Vérifier si le contexte de l'élément correspond à selectedContext
              if (item.name === selectedContext) {
                  // Ajouter les extensions de la plage à la liste des extensions disponibles
                  item.user_ranges.forEach(range => {
                      const start = parseInt(range.start);
                      const end = parseInt(range.end);
                      for (let exten = start; exten <= end; exten++) {
                          allExtens.push(String(exten));
                      }
                  });
              }
          });
  
          // Parcourir tenantExtensions.items[] pour supprimer les extensions utilisées pour ce contexte
          extensions.items.forEach(item => {
              if (item.context === selectedContext) {
                console.log(item.exten)
                allExtens = allExtens.filter(exten => exten !== item.exten);
              }
          });
  
          // Maintenant, allExtens contient toutes les extensions disponibles pour le contexte sélectionné
          console.log('Extensions disponibles pour le contexte sélectionné :', allExtens);
          setAvailableExtensions(allExtens)
      }
  }, [selectedContext, extensions, contexts]);
    
  const [inputValue, setInputValue] = useState('');
  const [suggestedExtensions, setSuggestedExtensions] = useState([]);

  // Fonction pour filtrer les extensions compatibles avec la saisie
  const filterExtensions = (input) => {
    return availableExtensions.filter(exten => exten.startsWith(input));
  };

  // Mise à jour des suggestions lorsque la valeur de l'input change
  useEffect(() => {
    setSuggestedExtensions(filterExtensions(inputValue));
  }, [inputValue]);

    // wazo comm for bill const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']
    const protocoles = ['SIP', 'SCCP', 'CUSTOM']


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
            <Select
            bg={cardContentBg}
            onChange={(e) => setSelectedContext(e.target.value)}
            sx={{
                '> option': {
                  background: cardContentBg,
                },
              }}>
                {contexts.items.map((item) => (
                    <option value={item.name} key={item.uuid}>
                        {item.label}
                    </option>
                ))}
            </Select>
            <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {suggestedExtensions.map((exten, index) => (
          <li key={index}>{exten}</li>
        ))}
      </ul>
    </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => userCreate(newUser)}>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserAdd;
