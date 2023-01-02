import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react';
import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';
import {CgGoogle, CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} spacing="8">
            <Heading children="Watch Your Fav Anime" size={'2xl'} />
            <Text 
            fontSize={"2xl"}
            fontFamily="cursive"
             textAlign={["center","left"]} children="Find you favorite anime at one place." />
            <Link to="/animes">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className="vector-graphics"boxSize={'md'} src={vg} objectFit="contain" />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading 
        textAlign={"center"}
        fontFamily="body"
        color={"yellow.400"}
         children="OUR ANIMES"/>

         <HStack className='brandsBanner'
         justifyContent={'space-evenly'}
         marginTop="4"
         >
         <CgGoogle/>
         <CgYoutube/>
         <CgGoogle/>
         <CgGoogle/>
         <CgGoogle/>

         </HStack>
      </Box>

      <div className="container2">
        <video autoPlay={false}
        controls controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}>

        </video>
      </div>
    </section>
  );
};

export default Home;
