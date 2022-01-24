import { Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import useSidebar from "./useSidebar";

const Layout = () => {
  const { isOpen, toggleSidebar, closeSidebarFromLink } = useSidebar();
  return (
    <Flex direction="column" minH="100vh">
      <Header handleMenuClick={toggleSidebar} />
      <Flex bg="gray.100" flex="1">
        <Sidebar isOpen={isOpen} closeSidebarFromLink={closeSidebarFromLink} />
        <Container as="main" maxW="container.xl" pt="8" pb="4">
          <Outlet />
        </Container>
      </Flex>
    </Flex>
  );
};
export default Layout;
