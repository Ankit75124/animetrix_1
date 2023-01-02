import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react'
import  {ColorModeSwitcher} from '../../../ColorModeSwitcher';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';


const LinkButton = ({url = '/', title = 'Home'}) => {
  return (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
};

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const isAuthenticated = true;

    const user = {
        role: "admin",
    };

    const logoutHandler = () => {
        console.log('logout');
    };

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width={'12'}
        height={'12'}
        rounded="full"
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay
        // backdropFilter={"blur(3px)"}
        />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>AnimeTrix</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <LinkButton url={'/'} title={'Home'} />
              <LinkButton url={'/animes'} title={'Browse All Animes'} />
              <LinkButton url={'/request'} title={'Request a Anime'} />
              <LinkButton url={'/contact'} title={'Contact Us'} />
              <LinkButton url={'/about'} title={'About'} />

              <HStack
                justifyContent={'space-evenly'}
                position="absolute"
                bottom={'2rem'}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                        <RiLogoutBoxLine/>
                          Logout
                        </Button>
                      </HStack>
                      {
                        user && user.role==="admin" && <Link to="/admin/dashboard">
                            <Button colorScheme={"purple"}
                            variant="ghost">
                            <RiDashboardFill
                                style={{margin:"4px"}}
                            />
                                DashBoard
                            </Button>
                        </Link>
                      }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>OR</p>
                    <Link to="/register">
                      <Button colorScheme={'yellow'}>Signup</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header
