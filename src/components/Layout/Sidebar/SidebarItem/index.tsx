import { Flex, Text, HStack, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";

type SidebarItemProps = {
  icon: IconDefinition;
  title: string;
  path: RoutePaths;
  isActive: boolean;
};

const SidebarItem = ({ icon, title, path, isActive }: SidebarItemProps) => {
  return (
    <ChakraLink
      as={NavLink}
      to={path}
      py={2}
      px={[4, 8]}
      mx={["auto", "auto", 0]}
      mb={2}
      borderRadius="lg"
      fontWeight="medium"
      width="85%"
      bg={isActive ? "gray.200" : "transparent"}
      color={isActive ? "gray.900" : "gray.500"}
      _hover={{ textDecoration: "none", bg: "gray.200", color: "gray.900" }}>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <HStack spacing={"4"}>
          <Icon
            as={FontAwesomeIcon}
            icon={icon}
            fontSize={{ base: "xl", md: "medium" }}
          />
          <Text display={{ base: "none", md: "block" }}>{title}</Text>
        </HStack>
      </Flex>
    </ChakraLink>
  );
};
export default SidebarItem;
