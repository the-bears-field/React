import './styles.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

export const App = () => {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">button</Button>
    </ChakraProvider>
  );
}
