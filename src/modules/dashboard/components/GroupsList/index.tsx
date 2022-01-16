import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { RoutePaths } from "routes/RoutePaths";
import groupsJSON from "modules/dashboard/api/groups.json";
import { Group } from "modules/dashboard/types";
import GroupCard from "../GroupCard";
import GroupsEmpty from "../GroupsEmpty";

const GroupsList = () => {
  const { t } = useTranslation("dashboard");
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
        as={Link}
        alignSelf="flex-end"
        colorScheme="blue"
        to={RoutePaths.NEW_GROUP}
        mb="8">
        {t("add-new-group")}
      </Button>
      <SimpleGrid minChildWidth="260px" spacing="6">
        {groups.map(group => (
          <GroupCard {...group} key={group.name} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
export default GroupsList;
