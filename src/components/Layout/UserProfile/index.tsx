import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {
  faChevronDown,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RouteLink from "components/RouteLink";
import { RoutePaths } from "routes/RoutePaths";

const UserProfile = () => {
  const { user, logout } = useAuth0();

  return (
    <Flex align="center">
      <HStack spacing="5">
        <Avatar name="User profile image" src={user?.picture} size="sm" />
        <Text
          display={{ base: "none", md: "block" }}
          fontSize="lg"
          fontWeight="medium">
          {user?.nickname}
        </Text>
        <Menu>
          <MenuButton
            size="xs"
            as={IconButton}
            aria-label="Options"
            icon={<FontAwesomeIcon icon={faChevronDown} />}
            variant="outline"
          />
          <MenuList>
            <RouteLink to={RoutePaths.SETTINGS}>
              <MenuItem icon={<FontAwesomeIcon icon={faCog} />}>
                Settings
              </MenuItem>
            </RouteLink>
            <MenuItem
              icon={<FontAwesomeIcon icon={faSignOutAlt} />}
              onClick={() => logout({ returnTo: window.location.origin })}>
              Log Out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};
export default UserProfile;
