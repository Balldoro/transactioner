import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useAuthContext } from "modules/auth/contexts/AuthContext";
import { TransactionFormValues } from "modules/category/types";
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

  const defaultValues: TransactionFormValues = {
    category: "",
    name: "",
    date: new Date(),
    amount: "",
    payedBy: userNickname,
    involvedUsers: [],
  };

  const handleSubmit: SubmitHandler<TransactionFormValues> = data => {
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
