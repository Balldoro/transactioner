import { Button, Flex, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { groupsJSON } from "modules/dashboard/api";
import { Group } from "modules/dashboard/types";
import GroupCard from "../GroupCard";
import GroupsEmpty from "../GroupsEmpty";
import NewGroupModal from "../NewGroupModal";

const GroupsList = () => {
  const { t } = useTranslation("dashboard");
  const {
    isOpen: isNewGroupModalOpen,
    onOpen: handleOpenNewGroupModal,
    onClose: handleCloseNewGroupModal,
  } = useDisclosure();

  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups(groupsJSON);
  }, []);

  if (groups.length === 0) {
    return <GroupsEmpty />;
  }

  return (
    <Flex direction="column">
      <Button
        alignSelf={{ base: "stretch", sm: "flex-end" }}
        colorScheme="blue"
        onClick={handleOpenNewGroupModal}
        my="8">
        {t("add-new-group")}
      </Button>
      <SimpleGrid minChildWidth="260px" spacing="6">
        {groups.map(group => (
          <GroupCard {...group} key={group.id} />
        ))}
      </SimpleGrid>
      <NewGroupModal
        isOpen={isNewGroupModalOpen}
        handleClose={handleCloseNewGroupModal}
      />
    </Flex>
  );
};
export default GroupsList;
