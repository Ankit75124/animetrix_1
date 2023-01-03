import {
    Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  color: 'green',
  height: '100%',
  backgroundColor: 'white',
};

const fileUploadStyle = {
    "&::file-selector-button ": fileUploadCss,
}

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            setImagePrev(reader.result);  
            setImage(file);  
        }
    };

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading textTransform={'upperCase'} children={'Registration'} />
        <form style={{ width: '100%' }}>

            <Box my={'4'} display={"flex"}justifyContent={"center"}>
                <Avatar 
                src={imagePrev}
                size={"2xl"}/>
            </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              type={'text'}
              focusBorderColor={'green.400'}
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="anime@watch.com"
              type={'email'}
              focusBorderColor={'green.400'}
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor={'green.400'}
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>

          <Box marginY={'4'}>
            <FormLabel htmlFor="password" children="Enter your password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              type={'password'}
              focusBorderColor={'green.400'}
            />
          </Box>

          <Button my="4" colorScheme={'green'} type="submit">
            Sign Up
          </Button>

          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button fontSize={'sm'} colorScheme={'green'} variant={'link'}>
                Log in
              </Button>{' '}
              Here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
