import {
  Box,
  Button,
  Grid,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const AnimeModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  animeTitle,
  episodes=[],
}) => {
  return (
    <Modal isOpen={isOpen} size="full">
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{animeTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="16">
            <Grid templateColumns={['1fr', '3fr 1fr']}>
              <Box px={['0', '16']}>
                <Box my="5">
                  <Heading children={animeTitle} />
                  <Heading children={`#${id}`} size="sm" opacity={0.4} />
                </Box>

                <Heading children={'Episodes'} size={'lg'} />

                <VideoCard
                  title="Pilot"
                  description="1st episode of Naruto, story of naurjsdjsdjs dfd"
                  num={1}
                  episodeId="sdfsfdfsdsd ----- episodeId  "
                  animeId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default AnimeModal;

function VideoCard({
  title,
  description,
  num,
  episodeId,
  animeId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my="8"
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107, 70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size="sm" children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(animeId, episodeId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
