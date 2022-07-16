import React, { useState, Suspense } from 'react';
import {
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';
import Topic from './Topic.jsx';
import TopicForm from './TopicForm.jsx';

function Agenda() {
  const [view, setView] = useState({ name: "All Topics", viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log("Changing view to: " + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case "All Topics":
        return <Topic  />;
      case "New Topic":
        return <TopicForm onSubmit={changeView("All Topics")} />;
      default:
        return <Topic />;
    }
  };

  return (
    <>
      <header>
        <nav>
        <Box m={3} p={2}>
          <HStack spacing='20px'>
            <Button colorScheme='blue' onClick={changeView("All Topics")}>Topics</Button>
            <Button colorScheme='blue' onClick={changeView("New Topic")}>New Topic</Button>
          </HStack>
        </Box> <br></br>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </>
  );
}
export default Agenda;
