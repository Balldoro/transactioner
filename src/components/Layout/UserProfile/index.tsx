import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import {
  faChevronDown,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RouteLink from "components/RouteLink";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { RoutePaths } from "routes/RoutePaths";

const UserProfile = () => {
  const { user, logoutUser } = useAuthContext();
  const { t } = useTranslation("layout");

  if (!user) {
    return null;
  }

  return (
    <Flex align="center">
      <HStack spacing="5">
        <Avatar name="User profile image" src={user.picture} size="sm" />
        <Text
          display={{ base: "none", md: "block" }}
          fontSize="lg"
          fontWeight="medium">
          {user.nickname}
        </Text>

        <Menu>
          <MenuButton
            size="xs"
            as={IconButton}
            aria-label="Options"
            icon={<FontAwesomeIcon icon={faChevronDown} />}
            variant="outline"
          />
          <Portal>
            <MenuList>
              <RouteLink to={RoutePaths.SETTINGS}>
                <MenuItem icon={<FontAwesomeIcon icon={faCog} />}>
                  {t("settings")}
                </MenuItem>
              </RouteLink>
              <MenuItem
                icon={<FontAwesomeIcon icon={faSignOutAlt} />}
                onClick={logoutUser}>
                {t("logout")}
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </HStack>
    </Flex>
  );
};
export default UserProfile;
