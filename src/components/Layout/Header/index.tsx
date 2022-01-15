import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
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
            display={{ md: "none" }}
            mr="4"
            aria-label="sksk"
            size="sm"
            icon={<FontAwesomeIcon icon={faBars} />}></IconButton>

          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium">
            Transactioner
          </Text>
        </Flex>
        <Flex>
          <div
            style={{
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              backgroundColor: "blue",
            }}
          />
          <Text display={{ base: "none", md: "block" }} ml="4">
            User username
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Header;
