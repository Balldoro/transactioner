import { useLocation } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import {
  faIdCard,
  faColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { RoutePaths } from "routes/RoutePaths";
import { HEADER_HEIGHT_LARGE, HEADER_HEIGHT_SMALL } from "../HEADER_HEIGHT";
import SidebarItem from "./SidebarItem";

const items = [
  { icon: faColumns, path: RoutePaths.DASHBOARD, title: "Dashboard" },
  { icon: faUsers, path: RoutePaths.GROUPS, title: "Grupy" },
  { icon: faIdCard, path: RoutePaths.PROFILE, title: "Profile" },
];

const Sidebar = () => {
  const { pathname } = useLocation();

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
        {items.map(({ icon, title, path }) => (
          <SidebarItem
            key={path}
            icon={icon}
            title={title}
            path={path}
            isActive={path === pathname}
          />
        ))}
      </Flex>
    </Box>
  );
};
export default Sidebar;
