import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Theme from './theme/Theme';

import { AuthProvider } from './services/AuthProvider';
import Index from './pages/Index';

function App() {
  
  useEffect(() => {
    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
        window.removeEventListener('contextmenu', handleContextMenu);
    };
}, []);

  return (
    <ChakraProvider theme={Theme}>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
