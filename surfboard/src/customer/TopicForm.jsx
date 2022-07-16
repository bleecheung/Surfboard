import React from 'react';
import axios from "axios";
import {
  Text,
  Center,
  FormLabel,
  Input,
  Container,
  Box,
} from '@chakra-ui/react'

function TicketForm() {

  function handleNewPost(titleArg, descriptionArg, timeArg) {
    axios.post('http://localhost:3001/create', {
      title: titleArg,
      description: descriptionArg,
      time: timeArg,
    });
  }

  return (
    <Container>
      <header>
        <Center bg='none' h='50px'>
          <Text fontWeight='medium' fontSize='30px'>Topic Form</Text>
        </Center>
      </header> <br></br>
      <Box boxShadow='dark-lg' p='6' rounded='md' bg='none'>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleNewPost(event.target.title.value, event.target.description.value, event.target.time.value)
          ;
          alert("Form submitted")
        }}>
          <FormLabel>
            Topic Title:
            <Input
              type="text"
              name="title"
              placeholder="Phone call"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>

          <FormLabel>
            Description:
            <Input
              type="text"
              name="description"
              placeholder="Enter additional information here"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>

          <FormLabel>
            Duration in min:
            <Input
              type="text"
              name="time"
              placeholder="60"
              required
              autocomplete="off"
            />
          </FormLabel> <br></br>


          <Input type="submit" value="Submit Ticket" />

          <hr />
        </form>
      </Box>
    </Container>
  );
}

export default TicketForm;
