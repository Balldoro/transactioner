import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Flex direction="column">
      <Header />
      <Flex bg="gray.100" flex="1">
        <Sidebar />
        <Container as="main" maxW="container.xl">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
};
export default Layout;
