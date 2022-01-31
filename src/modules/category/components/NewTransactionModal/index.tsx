import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { NewTransactionFormValues } from "modules/category/types";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import NewTransactionForm from "../NewTransactionForm";

type NewTransactionModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  handleClose,
}: NewTransactionModalProps) => {
  const { t } = useTranslation("category");

  const handleSubmit: SubmitHandler<NewTransactionFormValues> = data => {
    handleClose();
  };

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

        <ModalBody pb="4">
          <NewTransactionForm submit={handleSubmit} currency="PLN" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewTransactionModal;
