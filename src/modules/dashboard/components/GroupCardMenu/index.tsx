import {
  Menu,
  MenuButton,
  IconButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  faEllipsisV,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import AwesomeIcon from "components/AwesomeIcon";

const GroupCardMenu = () => {
  const { t } = useTranslation(["dashboard", "common"]);

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        size="sm"
        variant="unstyled"
        icon={<AwesomeIcon icon={faEllipsisV} color="gray.400" />}
        aria-label={t("dashboard:open-group-menu")}
      />
      <Portal>
        <MenuList minW="160px">
          <MenuItem icon={<AwesomeIcon icon={faEdit} />}>
            {t("common:edit")}
          </MenuItem>
          <MenuItem color="red.600" icon={<AwesomeIcon icon={faTrash} />}>
            {t("common:delete")}
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};
export default GroupCardMenu;
