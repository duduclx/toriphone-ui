import React from "react";

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
  const { userCreate, lineCreate, userAssociateLine } = useApi();
  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

  const steps = [
    { title: "Utilisateur", description: "compte" },
    { title: "Ligne", description: "numéro" },
    { title: "configuration", description: "options" },
  ];

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  const handleAddUserWithLine = async (newUser, line) => {
    const createUser = await userCreate(newUser)
    console.log('send line', line)
    const createLine = await lineCreate(line)
    const asso = await userAssociateLine(createUser, createLine)
  }

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

      <UserCreateSteps steps={steps} activeStep={activeStep} />

      <Flex mt={4}>
        {activeStep !== 0 ? (
          <Button onClick={() => goToPrevious()} mr={4}>
            Précedent
          </Button>
        ) : (
          <Button mr={4} onClick={() => userCreate(newUser)}>
            ajouter uniquement l'utilisateur
          </Button>
        )}
        {activeStep !== steps.length - 1 ? (
          <Button onClick={() => goToNext()} ml="auto">
            Suivant
          </Button>
        ) : (
          <Button ml="auto">Ajouter !!</Button>
        )}
      </Flex>
    </Flex>
  );
};

export default UserCreate;
