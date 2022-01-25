import {
  Menu,
  MenuButton,
  IconButton,
  Portal,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  faEllipsisV,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import { Group } from "modules/dashboard/types";
import AwesomeIcon from "components/AwesomeIcon";
import DeleteModal from "components/DeleteModal";

type GroupCardMenuProps = {
  group: Group;
};

const GroupCardMenu = ({ group: { name } }: GroupCardMenuProps) => {
  const { t } = useTranslation(["dashboard", "common"]);

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const deleteGroup = () => {
    closeDeleteModal();
  };

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
            onClick={openDeleteModal}>
            {t("common:delete")}
          </MenuItem>
        </MenuList>
      </Portal>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        infoText={t("dashboard:remove-group-confirm", { name })}
        handleClose={closeDeleteModal}
        handleConfirm={deleteGroup}
        name={name}
      />
    </Menu>
  );
};
export default GroupCardMenu;
