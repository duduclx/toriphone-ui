import React, { useState, useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";

import { useApi } from "../../../../services/ApiProvider";

import UserCreateStepOne from "./UserCreateStepOne";
import UserCreateStepTwo from "./UserCreateStepTwo";
import UserCreateStepThree from "./UserCreateStepThree";

const UserCreateSteps = ({ steps, activeStep }) => {
  const {
    policiesGroups,
    policiesGroupsGet,
    sipTemplates,
    extensions,
    contexts,
    userCreate,
    lineCreate,
    userAssociateLine
  } = useApi();

  // optionnel
  const protocoles = ["SIP", "SCCP", "CUSTOM"];

  // si pas de context (master), contexts = undefined
  const initialContextName =
    contexts && contexts.items.length > 0 ? contexts.items[0].name : "";
  //const [selectedContext, setSelectedContext] = useState(contexts.items[0].name);
  const [selectedContext, setSelectedContext] = useState(initialContextName);

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [extension, setExtension] = useState('')

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
    extension: {
      context: selectedContext,
      exten: extension,
    },
  });

  useEffect(() => {
    policiesGroupsGet();
  }, []);

  /*
  const handleAddUserWithLine = async () => {
    const createUser = await userCreate(newUser)
    console.log('send line', line)
    const createLine = await lineCreate(line)
    const asso = await userAssociateLine(createUser, createLine)
  }
  */

  const [availableExtensions, setAvailableExtensions] = useState([]);

  // obtenir une lite d'extensions attribuables
  useEffect(() => {
    if (selectedContext) {
      let allExtens = [];

      contexts.items.forEach((item) => {
        if (item.name === selectedContext) {
          item.user_ranges.forEach((range) => {
            const start = parseInt(range.start);
            const end = parseInt(range.end);
            for (let exten = start; exten <= end; exten++) {
              allExtens.push(String(exten));
            }
          });
        }
      });

      extensions.items.forEach((item) => {
        if (item.context === selectedContext) {
          allExtens = allExtens.filter((exten) => exten !== item.exten);
        }
      });
      setAvailableExtensions(allExtens);
    }
  }, [selectedContext, contexts, extensions]);

  // wazo comm for bill const subscriptionTypes = ['Voice', 'Unified Communication', 'Collaboration', 'Customer Relationship']

  return (
    <Flex flex="1" flexDirection="column" p="12">
      {steps[activeStep] && (
        <>
          {/* Contenu spécifique à chaque étape */}
          {activeStep === 0 && (
            <UserCreateStepOne newUser={newUser} setNewUser={setNewUser} />
          )}
          {activeStep === 1 && (
            <UserCreateStepTwo
              contexts={contexts}
              setSelectedContext={setSelectedContext}
              availableExtensions={availableExtensions}
              setExtension={setExtension}
              protocoles={protocoles}
              templates={sipTemplates}
            />
          )}
          {activeStep === 2 && <UserCreateStepThree />}
        </>
      )}
    </Flex>
  );
};

export default UserCreateSteps;
