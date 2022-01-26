import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { Group } from "modules/dashboard/types";
import EditGroupForm from "../EditGroupForm";

type EditGroupModalProps = {
  isOpen: boolean;
  group: Group;
  handleClose: () => void;
};

const EditGroupModal = ({
  isOpen,
  group,
  handleClose,
}: EditGroupModalProps) => {
  const { t } = useTranslation("dashboard");

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("edit-group-name", { name: group.title })}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <EditGroupForm group={group} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default EditGroupModal;
