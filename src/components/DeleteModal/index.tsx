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

type DeleteModalProps = {
  isOpen: boolean;
  name: string;
  infoText: string;

  handleClose: () => void;
  handleConfirm: () => void;
};

const DeleteModal = ({
  isOpen,
  name,
  infoText,
  handleClose,
  handleConfirm,
}: DeleteModalProps) => {
  const { t } = useTranslation("common");

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="red.600">{t("remove-name", { name })}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="gray.500">{infoText}</Text>
        </ModalBody>

        <ModalFooter>
          <HStack spacing="4">
            <Button variant="ghost" onClick={handleClose}>
              {t("cancel")}
            </Button>
            <Button
              onClick={handleConfirm}
              colorScheme="red"
              mr={3}
              leftIcon={<FontAwesomeIcon icon={faTrash} />}>
              {t("delete")}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeleteModal;
