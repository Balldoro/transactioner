import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type NewTransactionModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  handleClose,
}: NewTransactionModalProps) => {
  const { t } = useTranslation("category");

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("create-new-transaction")}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4"></ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewTransactionModal;
