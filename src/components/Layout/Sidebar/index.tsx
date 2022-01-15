import { Box, Flex, Text } from "@chakra-ui/react";

import { HEADER_HEIGHT_LARGE, HEADER_HEIGHT_SMALL } from "../HEADER_HEIGHT";

const Sidebar = () => {
  return (
    <Box
      as="aside"
      position="sticky"
      bg="white"
      top={{ base: HEADER_HEIGHT_SMALL, md: HEADER_HEIGHT_LARGE }}
      height={{
        base: `calc(100vh - ${HEADER_HEIGHT_SMALL})`,
        md: `calc(100vh - ${HEADER_HEIGHT_LARGE})`,
      }}
      w={{ base: "120px", md: "260px" }}>
      <Flex as="nav" flexDir="column">
        <Text>Sidebar item</Text>
      </Flex>
    </Box>
  );
};
export default Sidebar;
