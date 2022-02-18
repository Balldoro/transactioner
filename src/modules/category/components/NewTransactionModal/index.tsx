import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import { NewTransactionFormValues } from "modules/category/types";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import TransactionForm from "modules/category/components/TransactionForm";

type NewTransactionModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewTransactionModal = ({
  isOpen,
  handleClose,
}: NewTransactionModalProps) => {
  const { t } = useTranslation("category");
  const { user } = useAuthContext();

  const userNickname = user?.nickname as string;

  const defaultValues: NewTransactionFormValues = {
    category: "",
    title: "",
    date: new Date(),
    amount: "",
    payedBy: userNickname,
    involvedUsers: [],
  };

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
          <TransactionForm
            defaultValues={defaultValues}
            submit={handleSubmit}
            currency="PLN"
            submitText="Utwórz"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewTransactionModal;
