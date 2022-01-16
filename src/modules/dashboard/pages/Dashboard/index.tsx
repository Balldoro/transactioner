import { Button, Flex, Heading, Icon, VStack } from "@chakra-ui/react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { RoutePaths } from "routes/RoutePaths";
import groupsJSON from "modules/dashboard/api/groups.json";

type Group = {
  name: string;
  description: string;
  icon: string;
  currency: string;
  users: { nickname: string; picture: string }[];
};

const Dashboard = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups(groupsJSON);
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" height="100%">
      <VStack spacing="8">
        <Icon
          as={FontAwesomeIcon}
          icon={faBoxOpen}
          size="5x"
          color="gray.300"
        />
        <Heading textAlign="center">
          You don't have any created groups yet!
        </Heading>
        <Button as={Link} colorScheme="blue" to={RoutePaths.NEW_GROUP}>
          Create new group
        </Button>
      </VStack>
    </Flex>
  );
};
export default Dashboard;
