import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <Flex direction="column" flex="1" minH="100vh">
      <Header />
      <Flex bg="gray.100" flex="1">
        <Container as="main" maxW="container.xl">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
};
export default Layout;
