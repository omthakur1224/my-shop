import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Signin } from './components/authentications/Signin';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  return (
    <>
       <ColorModeSwitcher justifySelf="flex-end" />
      <MainRoutes/>
     
    </>
      );
}

export default App;
