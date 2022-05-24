import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/pages/Home";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Header>
        <Home />
      </Header>
    </ChakraProvider>
  );
};

export default App;
