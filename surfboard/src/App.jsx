import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Agenda from "./customer/Agenda.jsx";

function App() {

  return (
    <ChakraProvider>
      <Agenda />
    </ChakraProvider>

  );
}
export default App;
