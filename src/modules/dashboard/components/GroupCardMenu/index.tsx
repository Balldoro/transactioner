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
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Group } from "modules/dashboard/types";
import DeleteGroupModal from "../DeleteGroupModal";
import AwesomeIcon from "components/AwesomeIcon";

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
        icon={<AwesomeIcon icon={faEllipsisV} color="gray.400" />}
        aria-label={t("dashboard:open-group-menu")}
      />
      <Portal>
        <MenuList minW="160px">
          <MenuItem icon={<AwesomeIcon icon={faEdit} />}>
            {t("common:edit")}
          </MenuItem>
          <MenuItem
            color="red.600"
            icon={<AwesomeIcon icon={faTrash} />}
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
