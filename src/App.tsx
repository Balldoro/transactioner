import { Center, Heading } from "@chakra-ui/react";
import AppProviders from "./components/AppProviders";

const App = () => {
  return (
    <AppProviders>
      <Center as="main" minH="100vh">
        <Heading>Hello App!</Heading>
      </Center>
    </AppProviders>
  );
};

export default App;
