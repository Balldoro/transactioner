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
import EditGroupModal from "../EditGroupModal";

type GroupCardMenuProps = {
  group: Group;
};

const GroupCardMenu = ({ group }: GroupCardMenuProps) => {
  const { title } = group;

  const { t } = useTranslation(["dashboard", "common"]);

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const {
    isOpen: isEditModalOpen,
    onOpen: openEditModal,
    onClose: closeEditModal,
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
          <MenuItem
            icon={<AwesomeIcon icon={faEdit} />}
            onClick={openEditModal}>
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

      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          infoText={t("dashboard:remove-group-confirm", { name: title })}
          handleClose={closeDeleteModal}
          handleConfirm={deleteGroup}
          name={title}
        />
      )}

      {isEditModalOpen && (
        <EditGroupModal
          isOpen={isEditModalOpen}
          handleClose={closeEditModal}
          group={group}
        />
      )}
    </Menu>
  );
};
export default GroupCardMenu;
