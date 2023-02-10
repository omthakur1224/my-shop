import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { useEffect,useState } from 'react';
import { auth } from '../../firebase.config';
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons';

const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon boxSize="5" />,
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon boxSize="5" />,
  },
]
export const OAuthButtonGroup = () => {

  const [user,setUser]=useState({});

  const handleOauth=()=>{
    const Provider=new GoogleAuthProvider();
      signInWithPopup(auth,Provider);
  }
  useEffect(()=>{
    const sign_in=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
  },[])
  console.log(user,'currentUser')
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full" onClick={handleOauth}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)
}