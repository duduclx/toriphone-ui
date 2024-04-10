import {
    Box,
    Button,
    VStack,
    Card,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    CardBody,
    Center,
    Text,
    Link,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    IconButton,
    InputLeftAddon,
    Image,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { FaEye, FaEyeSlash } from 'react-icons/fa';
  import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
  import { useTranslation } from 'react-i18next';
  import { LocaleSwitcher } from '../utils/LanguageSwitcher';
  
  import { useAuth} from '../services/AuthProvider';
  
  import white from '/wazo-white-square-logo.svg';
  import black from '/wazo-black-square-logo.svg';
  
  function Login() {
    const pageBg = useColorModeValue("pageBg.light", "pageBg.dark");
    const cardContentBg = useColorModeValue("cardContentBg.light", "cardContentBg.dark");
    // form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [server, setServer] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    // log user from authprovider
    const { onLogin, loading, errorMessage } = useAuth();
  
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
  
    return (
      <Box bg={pageBg} height="100vh"> 
        <Center>
          <Stack spacing="4">
            <VStack as="header" mt="8">
              <Box>
                <Image 
                boxSize='150px'
                alt='wazo logo'
                src={useColorModeValue(black, white)}
                  />
              </Box>
            </VStack>
            <Card
              bg={cardContentBg}
              variant="outline"
              borderColor="#d8dee4"
              maxW="308px"
            >
              <CardBody>
                <HStack justifyContent='space-between'>
                  <LocaleSwitcher />
                  <ColorModeSwitcher />
                </HStack>
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
                    <FormControl isRequired>
                      <FormLabel size="sm">{t("login.form_server")}</FormLabel>
                      <InputGroup size="sm">
                        <InputLeftAddon children="https://" />
                        <Input
                          type="text"
                          borderColor="#d8dee4"
                          size="sm"
                          borderRadius="6px"
                          color={useColorModeValue('black', 'white')}
                          placeholder={t('login.form_server_placeholder')}
                          value={server}
                          onChange={event => setServer(event.currentTarget.value)}
                          onKeyDown={(e) => handleKeyDown(e)}
                        />
                      </InputGroup>
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
  
            <Card variant="outline" borderColor="#d0d7de" bg={cardContentBg}>
              <CardBody>
                <Center>
                  <HStack fontSize="sm" spacing="1">
                    <Text>{t("login.discover")}</Text>
                    <Link isExternal color="#0969da" href="https://wazo-platform.org/" target='_blank'>
                      {t("login.discover_link")}
                    </Link>
                  </HStack>
                </Center>
              </CardBody>
            </Card>
          </Stack>
        </Center>
      </Box>
    );
  }
  
  export default Login;