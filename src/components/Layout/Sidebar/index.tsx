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
import { useTranslation } from "react-i18next";

type SidebarProps = {
  isOpen: boolean;
  closeSidebarFromLink: () => void;
};

const Sidebar = ({ isOpen, closeSidebarFromLink }: SidebarProps) => {
  const { pathname } = useLocation();
  const { t } = useTranslation("layout");

  const items = [
    { icon: faColumns, path: RoutePaths.DASHBOARD, title: t("dashboard") },
    { icon: faUsers, path: RoutePaths.GROUPS, title: t("groups") },
    { icon: faIdCard, path: RoutePaths.PROFILE, title: t("profile") },
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <Box
      as="aside"
      position={{ base: "fixed", md: "sticky" }}
      zIndex="2"
      bg="white"
      top={{ base: HEADER_HEIGHT_SMALL, md: HEADER_HEIGHT_LARGE }}
      height={{
        base: `calc(100vh - ${HEADER_HEIGHT_SMALL})`,
        md: `calc(100vh - ${HEADER_HEIGHT_LARGE})`,
      }}
      w={{ base: "120px", md: "260px" }}>
      <Flex as="nav" flexDir="column" pt="2">
        {items.map(({ icon, title, path }) => (
          <SidebarItem
            key={path}
            icon={icon}
            title={title}
            path={path}
            isActive={path === pathname}
            handleClick={closeSidebarFromLink}
          />
        ))}
      </Flex>
    </Box>
  );
};
export default Sidebar;
