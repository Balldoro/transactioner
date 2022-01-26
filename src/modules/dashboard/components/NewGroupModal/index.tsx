import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { GroupFormValues } from "modules/dashboard/types";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";
import GroupForm from "../GroupForm";

const defaultValues: GroupFormValues = {
  category: "",
  title: "",
  description: "",
  currency: "PLN",
  friends: [],
};

type GroupModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewGroupModal = ({ isOpen, handleClose }: GroupModalProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation("dashboard");

  const handleSubmit: SubmitHandler<GroupFormValues> = data => {
    navigate(`${RoutePaths.GROUP}/${data.title}`);
  };

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("create-new-group")}</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb="4">
          <GroupForm
            defaultValues={defaultValues}
            submitText={t("create-new-group")}
            submit={handleSubmit}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewGroupModal;
