import {
    Box,
    Flex,
    Button,
    Card,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    CardBody,
    Center,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    IconButton,
    Select,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { FaEye, FaEyeSlash } from 'react-icons/fa';
  import { useTranslation } from 'react-i18next';
  
  import { useAuth } from '../../../../services/AuthProvider';
  import { useClient } from '../../../../services/ClientProvider';
  
  
  function ServerLogin() {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    const cardContentBg = useColorModeValue("cardContentBg.light", "cardContentBg.dark");
    // form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [server, setServer] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    // log user from authprovider
    const { onLogin, loading, errorMessage } = useAuth();
    // clientServers
    const {clientServers, setClientCurrentServer} = useClient();
  
    const { t } = useTranslation();
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onLogin(email, password, server)
      }
    };
  
    // hide show password
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const onChangeServer = (e) => {
      setClientCurrentServer(e.target.value)
      setServer(e.target.value)
    }

    useEffect(() => {
      const firstServerKey = Object.keys(clientServers)[0];
      setClientCurrentServer(clientServers[firstServerKey].hostname);
      setServer(clientServers[firstServerKey].hostname);
    }, [clientServers])
  
    return (
      <Flex bg={pageBg} flex={1} justifyContent="center"> 
        <Center>
          <Stack spacing="4">
            <Card
              bg={cardContentBg}
              variant="outline"
              borderColor="#d8dee4"
              maxW="308px"
            >
              <CardBody>
                { errorMessage && (
                  <Box bg="#ef5350" p='4' borderRadius='6px' textAlign='center' mb='4'>
                    {errorMessage}
                  </Box>
                )}
                
                <form>
                  <Stack spacing="4">
                    <FormControl isRequired>
                      <FormLabel size="sm">{t('login.form_email')}</FormLabel>
                      <Input
                        type="text"
                        borderColor="#d8dee4"
                        size="sm"
                        borderRadius="6px"
                        color={useColorModeValue('black', 'white')}
                        value={email}
                        onChange={event => setEmail(event.currentTarget.value)}
                        onKeyDown={(e) => handleKeyDown(e)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <HStack justify="space-between">
                        <FormLabel size="sm">{t('login.form_password')}</FormLabel>
                        <Button
                          as="a"
                          href="#"
                          variant="link"
                          size="xs"
                          color="blue.500"
                          fontWeight="500"
                        >
                          {t('login.form_password_forgot')}
                        </Button>
                      </HStack>
                      <InputGroup size="sm">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          borderColor="#d8dee4"
                          size="sm"
                          borderRadius="6px"
                          color={useColorModeValue('black', 'white')}
                          value={password}
                          onChange={event =>
                            setPassword(event.currentTarget.value)
                          }
                          onKeyDown={(e) => handleKeyDown(e)}
                        />
                        <InputRightElement>
                          <IconButton
                            variant="ghost"
                            size="sm"
                            p="0"
                            _hover={{ bg: 'transparent' }}
                            onClick={handleShowPassword}
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                          ></IconButton>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Serveur</FormLabel>
                    <Select
                    bg={cardContentBg}
                    sx={{
                      "> option": {
                        background: cardContentBg,
                      },
                    }}
                    onChange={(e) => onChangeServer(e)}>
                    {Object.entries(clientServers).map(([serverKey, server]) => (
                        <option
                        key={serverKey}
                        value={server.hostname}
                        selected={server.hostname === server} >
                        {server.hostname}
                        </option>
                    ))}
                    </Select>
                    </FormControl>
                    <Button
                      bg="green.500"
                      color="white"
                      size="sm"
                      _hover={{ bg: 'green.600' }}
                      _active={{ bg: '#298e46' }}
                      onClick={() => onLogin(email, password, server)}
                    >
                      { loading ? t('login.form_button_loading') : t('login.form_button')}
                    </Button>
                  </Stack>
                </form>
              </CardBody>
            </Card>
          </Stack>
        </Center>
      </Flex>
    );
  }
  
  export default ServerLogin;