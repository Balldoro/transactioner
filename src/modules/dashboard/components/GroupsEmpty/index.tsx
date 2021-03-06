import { Flex, VStack, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import AwesomeIcon from "components/AwesomeIcon";
import NewGroupModal from "../NewGroupModal";

const GroupsEmpty = () => {
  const { t } = useTranslation("dashboard");
  const {
    isOpen: isNewGroupModalOpen,
    onOpen: handleOpenNewGroupModal,
    onClose: handleCloseNewGroupModal,
  } = useDisclosure();

  return (
    <Flex align="center" justify="center" height="100%">
      <VStack spacing="8">
        <AwesomeIcon icon={faBoxOpen} size="5x" color="gray.300" />
        <Heading textAlign="center" fontWeight="medium">
          {t("you-dont-have-groups")}
        </Heading>
        <Button colorScheme="blue" onClick={handleOpenNewGroupModal}>
          {t("create-new-group")}
        </Button>
      </VStack>
      <NewGroupModal
        isOpen={isNewGroupModalOpen}
        handleClose={handleCloseNewGroupModal}
      />
    </Flex>
  );
};
export default GroupsEmpty;
