import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group } from "modules/dashboard/types";
import { useTranslation } from "react-i18next";

type DeleteGroupModalProps = {
  isOpen: boolean;
  group: Group;
  handleClose: () => void;
};

const DeleteGroupModal = ({
  isOpen,
  group,
  handleClose,
}: DeleteGroupModalProps) => {
  const { t } = useTranslation(["common", "dashboard"]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="red.600">
          {t("common:remove-name", { name: group.name })}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="gray.500">
            {t("dashboard:remove-group-confirm", { name: group.name })}
          </Text>
        </ModalBody>

        <ModalFooter>
          <HStack spacing="4">
            <Button variant="ghost" onClick={handleClose}>
              {t("common:cancel")}
            </Button>
            <Button
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
export default DeleteGroupModal;
