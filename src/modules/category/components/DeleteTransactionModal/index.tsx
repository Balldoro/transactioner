import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  HStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "react-i18next";

type DeleteTransactionModalProps = {
  isOpen: boolean;
  name: string;
  id: number;

  handleClose: () => void;
  handleConfirm: () => void;
};

const DeleteTransactionModal = ({
  isOpen,
  name,
  handleClose,
  handleConfirm,
}: DeleteTransactionModalProps) => {
  const { t } = useTranslation(["common", "category"]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="red.600">
          {t("common:remove-name", { name })}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="gray.500">
            {t("category:remove-transaction-confirm", { name })}
          </Text>
        </ModalBody>

        <ModalFooter>
          <HStack spacing="4">
            <Button variant="ghost" onClick={handleClose}>
              {t("common:cancel")}
            </Button>
            <Button
              onClick={handleConfirm}
              colorScheme="red"
              mr={3}
              leftIcon={<FontAwesomeIcon icon={faTrash} />}>
              {t("common:delete")}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeleteTransactionModal;
