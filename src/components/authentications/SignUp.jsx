import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
  } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.config'

  import { OAuthButtonGroup } from './OauthButtonGroup'

  
  export const SignUp = () =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSignin=()=>{
        console.log(email,password,'email and password');
        createUserWithEmailAndPassword(auth,email,password)
        .then((creds)=>{console.log(creds,'user creds')})
        .catch((err)=>console.log(err,'error'))
    }
  return(   
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: 'xs',
                md: 'sm',
              }}
            >
              Sign up here
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">If you already have an account?</Text>
              <Button variant="link" colorScheme="blue">
                <Link to='/signin'>
                Sign in
                </Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={{
            base: 'transparent',
            sm: 'bg-surface',
          }}
          boxShadow={{
            base: 'none',
            sm: 'md',
          }}
          borderRadius={{
              base: 'none',
            sm: 'xl',
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
              </FormControl>
          
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={handleSignin}>Sign up</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider/>
              </HStack>
              <OAuthButtonGroup/>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
} 