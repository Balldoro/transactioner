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
import { Group } from "modules/dashboard/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DeleteGroupModal from "../DeleteGroupModal";

type GroupCardMenuProps = {
  group: Group;
};

const GroupCardMenu = ({ group }: GroupCardMenuProps) => {
  const { t } = useTranslation(["dashboard", "common"]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
          <MenuItem
            color="red.600"
            icon={<FontAwesomeIcon icon={faTrash} />}
            onClick={() => setIsDeleteModalOpen(true)}>
            {t("common:delete")}
          </MenuItem>
        </MenuList>
      </Portal>
      <DeleteGroupModal
        isOpen={isDeleteModalOpen}
        handleClose={() => setIsDeleteModalOpen(false)}
        group={group}
      />
    </Menu>
  );
};
export default GroupCardMenu;
