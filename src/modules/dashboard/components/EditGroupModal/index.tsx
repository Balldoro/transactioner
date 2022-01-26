import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SubmitHandler } from "react-hook-form";

import { Group, GroupFormValues } from "modules/dashboard/types";
import GroupForm from "../GroupForm";

type EditGroupModalProps = {
  isOpen: boolean;
  group: Group;
  handleClose: () => void;
};

const EditGroupModal = ({
  isOpen,
  group: { title, description, currency, category, users },
  handleClose,
}: EditGroupModalProps) => {
  const { t } = useTranslation(["dashboard", "common"]);

  const defaultValues: GroupFormValues = {
    category: category.name,
    title,
    description,
    currency,
    friends: users.map(({ nickname }) => nickname),
  };

  const handleSubmit: SubmitHandler<GroupFormValues> = data => {
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
        <ModalHeader>
          {t("dashboard:edit-group-name", { name: title })}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <GroupForm
            defaultValues={defaultValues}
            submitText={t("common:edit")}
            submit={handleSubmit}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default EditGroupModal;
