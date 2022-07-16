import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
  // FormControl,
  // FormLabel,
  // Input,
  // useDisclosure
} from '@chakra-ui/react';

function Topic() {
  const [topics, setTopics] = useState([]);
  // const { isOpen, onClose, onOpen } = useDisclosure();

  const onLoad = ()=> {
    axios.get(`http://localhost:3001/topics`)
      .then((data)=> {
        console.log(data.data)
        setTopics(data.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(onLoad, []);

  function handleChange(topicDescription, topicId, topicTitle, topicTime, updatedTitle, updatedDescription,  updatedTime) {
    axios.put(`http://localhost:3001/update`, {
      _id: topicId,
      description: topicDescription,
      title: topicTitle,
      time: topicTime,
      updatedTitle: updatedTitle,
      updatedDescription: updatedDescription,
      updatedTime: updatedTime,
    })
    .then(()=> {
      alert('Change successful');
      window.location.reload(false);
    })
    .catch((error) => {
      alert(error);
    });
  };

  function handleDelete(topicId) {
    axios.delete(`http://localhost:3001/delete`, { data: {
      _id: topicId,
    } })
    .then(()=> {
      alert('Delete successful');
      window.location.reload(false);
    })
    .catch((error) => {
      alert(error);
    });
  };

  return (
    <div>
      <Box bg="#6BCB77" m={5} mx="auto"  border="1px solid" borderColor='#6BCB77' width="90vw" borderRadius="10">
        <TableContainer>
          <Table variant='striped'>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>title</Th>
                <Th>description</Th>
                <Th>minutes</Th>
                <Th>modify</Th>
                <Th>delete</Th>
              </Tr>
            </Thead>
            <Tbody>
            {topics.map((topic, index) => (
              <Tr>
                <Td>{index+1}</Td>
                <Td>{topic.title}</Td>
                <Td>{topic.description}</Td>
                <Td>{topic.time}</Td>
                <Td>
                <Button colorScheme='blue' onClick={() => {
                    let updatedTitle = prompt('Enter new title');
                    let updatedDescription = prompt('Enter new description');
                    let updatedTime = prompt('Enter new duration');
                    handleChange(topic.description, topic._id, topic.title, topic.time, updatedTitle, updatedDescription, updatedTime);
                    }}>Modify</Button>
                </Td>
                <Td>
                  <Button colorScheme='blue' onClick={() => {
                    handleDelete(topic._id);
                    }}>Delete</Button>
                </Td>
              </Tr>
            ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      </div>

  );
}

export default Topic;

{/* <Button colorScheme='blue' onClick={onOpen}>Modify</Button>
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      <ModalCloseButton />
    </ModalHeader>

    <ModalBody>
    <form onSubmit={(event) => {
    handleChange(topic.description, topic._id, topic.title, topic.time, event.target.updatedTitle.value, event.target.updatedDescription.value, event.target.updatedTime.value);
    }}>
      <FormControl>
        <FormLabel>
          New Title:
          <Input
            type="text"
            name="updatedTitle"
            placeholder="Name of new title"
            autocomplete="off"
          />
        </FormLabel> <br></br>

        <FormLabel>
          New Description:
          <Input
            type="text"
            name="updatedDescription"
            placeholder="Enter additional information here"
            autocomplete="off"
          />
        </FormLabel> <br></br>

        <FormLabel>
          New Duration in min:
          <Input
            type="text"
            name="updatedTime"
            placeholder="60"
            autocomplete="off"
          />
        </FormLabel> <br></br>
      </FormControl>
      <Input type="submit" value="Submit Topic" />
      </form>
    </ModalBody>
  </ModalContent>
</Modal> */}
