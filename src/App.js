import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function App() {
  const itemStyle = {
    p: 2,
    m: 2,
    borderRadius: 'xl'
  };
  return (
    <ChakraProvider>
      <Box
        m='2'
        w='200px'
        borderWidth='1px'
        borderRadius='xl'
      >
        <Box sx={itemStyle}
          bgColor='red.200'
          fontSize='xs'
        >
          TEST 1
        </Box>
        <Box sx={itemStyle}
          bgColor='blue.200'
          fontSize='md'
        >
          TEST 2
        </Box>
        <Box sx={itemStyle}
          bgColor='green.200'
          fontSize='xl'
        >
          TEST 3
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
