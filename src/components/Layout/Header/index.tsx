import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import UserProfile from "../UserProfile";
import AwesomeIcon from "components/AwesomeIcon";

type HeaderProps = {
  handleMenuClick: () => void;
};

const Header = ({ handleMenuClick }: HeaderProps) => {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1"
      bg="white"
      px={[4, 8]}
      py={4}>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <IconButton
            onClick={handleMenuClick}
            display={{ md: "none" }}
            mr="4"
            aria-label="open menu"
            size="sm"
            bg="transparent"
            icon={<AwesomeIcon icon={faBars} />}
          />

          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium">
            Transactioner
          </Text>
        </Flex>
        <UserProfile />
      </Flex>
    </Box>
  );
};
export default Header;
