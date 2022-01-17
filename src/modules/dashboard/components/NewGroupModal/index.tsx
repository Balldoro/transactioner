import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import NewGroupForm from "../NewGroupForm";

type NewGroupModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewGroupModal = ({ isOpen, handleClose }: NewGroupModalProps) => {
  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new group</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <NewGroupForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewGroupModal;
