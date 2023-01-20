import { Button, ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">button</Button>
    </ChakraProvider>
  );
}
