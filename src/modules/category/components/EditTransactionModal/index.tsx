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

import { TransactionFormValues, Transaction } from "modules/category/types";
import TransactionForm from "modules/category/components/TransactionForm";

type EditTransactionModalProps = {
  isOpen: boolean;
  transaction: Transaction;
  handleClose: () => void;
};

const EditTransactionModal = ({
  isOpen,
  transaction: { amount, category, date, name, involvedUsers, payedBy },
  handleClose,
}: EditTransactionModalProps) => {
  const { t } = useTranslation("category");

  const defaultValues: TransactionFormValues = {
    category: category.value,
    title: name,
    date: new Date(date),
    amount: String(amount),
    payedBy: payedBy.nickname,
    involvedUsers: involvedUsers.map(({ nickname }) => nickname),
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
        <ModalHeader>{t("edit-transaction", { name })}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <TransactionForm
            defaultValues={defaultValues}
            submit={handleSubmit}
            currency="PLN"
            submitText="Edytuj"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default EditTransactionModal;
