import React from "react";

import { Flex, Image, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import white from "/wazo-white-logo.svg";
import black from "/wazo-black-logo.svg";
import { useTranslation } from "react-i18next";

const AppLoader = () => {
    const {t} = useTranslation();
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");

    return (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          bg={pageBg}
          flex={1}
        >
          <Image
            boxSize="150px"
            alt="wazo logo"
            src={useColorModeValue(black, white)}
          />
          <Spinner
            colorScheme="green"
            size="xl"
            label="loading wazo"
          />
          <Text mt={'4'}>{t('app.loader')}</Text>
        </Flex>
      );
};

export default AppLoader;