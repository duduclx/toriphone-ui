import React, { useState, useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";

import { useApi } from "../../../../services/ApiProvider";

import UserCreateStepOne from "./UserCreateStepOne";
import UserCreateStepTwo from "./UserCreateStepTwo";
import UserCreateStepThree from "./UserCreateStepThree";

const UserCreateSteps = ({ steps, activeStep, contexts, setSelectedContext, setSelectedContextName, newUser, setNewUser, availableExtensions, setExtension, line, setLine, addPolicie, setAddPolicie, addVoicemail, setAddVoicemail }) => {


  // wazo comm for bill const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']

  return (
    <Flex flex="1" flexDirection="column" p="12">
      {steps[activeStep] && (
        <>
          {/* Contenu spécifique à chaque étape */}
          {activeStep === 0 && (
            <UserCreateStepOne newUser={newUser} setNewUser={setNewUser} setLine={setLine} addPolicie={addPolicie} setAddPolicie={setAddPolicie}/>
          )}
          {activeStep === 1 && (
            <UserCreateStepTwo
              contexts={contexts}
              setSelectedContext={setSelectedContext}
              setSelectedContextName={setSelectedContextName}
              availableExtensions={availableExtensions}
              setExtension={setExtension}
              line={line}
              setLine={setLine}
            />
          )}
          {activeStep === 2 && <UserCreateStepThree addVoicemail={addVoicemail} setAddVoicemail={setAddVoicemail} />}
        </>
      )}
    </Flex>
  );
};

export default UserCreateSteps;
