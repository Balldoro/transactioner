import {
  Menu,
  MenuButton,
  IconButton,
  Icon,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  faEllipsisV,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const GroupCardMenu = () => {
  const { t } = useTranslation(["dashboard", "common"]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size="sm"
        variant="unstyled"
        icon={<Icon as={FontAwesomeIcon} icon={faEllipsisV} color="gray.400" />}
        aria-label={t("dashboard:open-group-menu")}
      />
      <Portal>
        <MenuList minW="160px">
          <MenuItem icon={<FontAwesomeIcon icon={faEdit} />}>
            {t("common:edit")}
          </MenuItem>
          <MenuItem color="red.600" icon={<FontAwesomeIcon icon={faTrash} />}>
            {t("common:delete")}
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};
export default GroupCardMenu;
