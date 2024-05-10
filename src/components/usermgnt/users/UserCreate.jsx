import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import UserCreateSteps from "./content/UserCreateSteps";

import { useApi } from "../../../services/ApiProvider";

const UserCreate = () => {
  const { contexts, sipTemplates, policies, policieUserAdd, userCreate, lineCreate, userAssociateLine, setServerPage, contextRange, contextRangeGet, userCreateVoicemail } =
    useApi();

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // si pas de context (master), contexts = undefined
  const initialContextName =
    contexts && contexts.items.length > 0 ? contexts.items[0].name : "";
  const [selectedContextName, setSelectedContextName] = useState(initialContextName);
  const initialContext = contexts && contexts.items.length > 0 ? contexts.items[0] : {};
  const [selectedContext, setSelectedContext] = useState(initialContext);
  
  const [policieAdmin, setPolicieAdmin] = useState({})

  const [extension, setExtension] = useState("");

  const [sipTemplate, setSipTemplate] = useState(
    sipTemplates.items.find((item) => item.label === "webrtc")
  );

  const [line, setLine] = useState({
    firstname: newUser.firstname,
    lastname: newUser.lastname,
    sipTemplate: {
      label: sipTemplate.label,
      uuid: sipTemplate.uuid,
    },
    extensions: {
      context: selectedContext,
      exten: extension,
    },
  });

  const [addPolicie, setAddPolicie] = useState(false)
  const [addVoicemail, setAddVoicemail] = useState(false)

  const [availableExtensions, setAvailableExtensions] = useState([]);

  // obtenir une lite d'extensions attribuables
  useEffect(() => {
    contextRangeGet(selectedContext.id)

    if (contextRange.items) {
      const available = [];
      contextRange.items.forEach(item => {
          const start = parseInt(item.start);
          const end = parseInt(item.end);

          if (!isNaN(start) && !isNaN(end)) {
              for (let i = start; i <= end; i++) {
                  available.push(i);
              }
          }
      });
      setAvailableExtensions(available)
      setLine({
        ...line,
        extensions: {
          context: selectedContextName,
          exten: available[0]
        }
      });
    }
  }, [selectedContext]);
  
  useEffect(() => {
    const initialPolicie = policies && policies.items && policies.items.length > 0
        ? policies.items.find(policy => policy.name === "wazo_default_admin_policy")
        : null;

        setPolicieAdmin(initialPolicie);
}, [policies]);

  // optionnel
  const protocoles = ["SIP", "SCCP", "CUSTOM"];

  // design
  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

  // stepper
  const steps = [
    { title: "Utilisateur", description: "compte" },
    { title: "Ligne", description: "numéro" },
    { title: "configuration", description: "options" },
  ];

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  // buttons
  const handleAddUserWithLine = async () => {
    const createdUser = await userCreate(newUser);
    const createdLine = await lineCreate(line);
    const associated = userAssociateLine(createdUser, createdLine);

    if (addPolicie) {
      policieUserAdd(createdUser, policieAdmin)
    }

    if (addVoicemail) {
      await userCreateVoicemail(createdUser, createdLine)
    }
    if (associated) {
      setServerPage("users")
    }
  };

  const handleAddUserOnly = async () => {
    const createdUser = await userCreate(newUser);

    if (addPolicie) {
      policieUserAdd(createdUser, policieAdmin)
    }

    if (createdUser) {
      setServerPage("users")
    }
  };

  return (
    <Flex flex="1" flexDirection="column" bg={pageBg} p="12">
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <UserCreateSteps
        steps={steps}
        activeStep={activeStep}
        contexts={contexts}
        availableExtensions={availableExtensions}
        setSelectedContext={setSelectedContext}
        setSelectedContextName={setSelectedContextName}
        newUser={newUser}
        setNewUser={setNewUser}
        line={line}
        setLine={setLine}
        setExtension={setExtension}
        addPolicie={addPolicie}
        setAddPolicie={setAddPolicie}
        addVoicemail={addVoicemail}
        setAddVoicemail={setAddVoicemail}
      />

      <Flex mt={4}>
        {activeStep !== 0 ? (
          <Button onClick={() => goToPrevious()} mr={4}>
            Précedent
          </Button>
        ) : (
          <Button mr="4" onClick={() => handleAddUserOnly()}>
            ajouter uniquement l'utilisateur
          </Button>
        )}
        {activeStep !== steps.length - 1 ? (
          <Button onClick={() => goToNext()} ml="auto">
            Suivant
          </Button>
        ) : (
          <Button ml="auto" onClick={() => handleAddUserWithLine()}>
            Ajouter !!
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default UserCreate;
