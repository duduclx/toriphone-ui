import React from "react";

import {
  Flex,
  Text,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";

const UserCreateStepTwo = ({
  contexts,
  setSelectedContext,
  setSelectedContextName,
  availableExtensions,
  setExtension,
  line,
  setLine
}) => {

  const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" gap="4" alignSelf="center" width="50%">
        <Text fontSize="xl" textAlign="center" mb="4">
          Création de la ligne
        </Text>

        <Text>Numéro de ligne :</Text>
        <Select
          onChange={(e) => {
            setSelectedContextName(e.target.value.name)
            setSelectedContext(e.target.value)
          }}
          bg={pageBg}
          sx={{
            "> option": {
              background: pageBg,
            },
          }}
        >
          {contexts.items.map((item) => (
            <option value={item} key={item.uuid}>
              {item.label}
            </option>
          ))}
        </Select>
        <Select
        bg={pageBg}
        sx={{
          "> option": {
            background: pageBg,
          },
        }}
        onChange={(e) => {
          setExtension(e.target.value)
          setLine({
            ...line,
            extensions: {
              ...line.extensions,
              exten: e.target.value
            }
          });
          }}>
            {availableExtensions.map((item, index) => (
                <option value={item} key={index}>
                    {item}
                </option>
            ))}

        </Select>
        {/*
        <Text>Type de ligne :</Text>
        <Select
          bg={pageBg}
          sx={{
            "> option": {
              background: pageBg,
            },
          }}
        >
          {protocoles.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>

        <Text>modèle de ligne :</Text>
        <Select
          bg={pageBg}
          defaultValue="webrtc"
          sx={{
            "> option": {
              background: pageBg,
            },
          }}
        >
          {templates.items.map((item, index) => (
            <option key={index}>{item.label}</option>
          ))}
        </Select>
          */}

      </Flex>
    </Flex>
  );
};

export default UserCreateStepTwo;
