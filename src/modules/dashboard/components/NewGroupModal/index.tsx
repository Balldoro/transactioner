import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import NewGroupForm from "../NewGroupForm";

type NewGroupModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewGroupModal = ({ isOpen, handleClose }: NewGroupModalProps) => {
  const { t } = useTranslation("dashboard");

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("create-new-group")}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <NewGroupForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewGroupModal;
