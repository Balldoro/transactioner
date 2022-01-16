import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  VStack,
  Image,
  AvatarGroup,
  SimpleGrid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { faBoxOpen, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
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

  if (groups.length === 0) {
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
  }

  return (
    <Flex direction="column">
      <Button
        as={Link}
        alignSelf="flex-end"
        colorScheme="blue"
        to={RoutePaths.NEW_GROUP}
        mb="8">
        Add new group
      </Button>
      <Flex height="100%" align="flex-start" justify="center">
        <SimpleGrid minChildWidth="260px" spacing="6" width="100%">
          {groups.map(({ name, description, icon, users }) => (
            <Flex
              direction="column"
              height="100%"
              key={name}
              width={["100%", "auto"]}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="4"
              bg="white">
              <Flex justify="space-between">
                <Image src={icon} boxSize="32px" />
                <IconButton
                  size="sm"
                  variant="unstyled"
                  icon={
                    <Icon
                      as={FontAwesomeIcon}
                      icon={faEllipsisV}
                      color="gray.400"
                    />
                  }
                  aria-label="more"
                />
              </Flex>

              <Box py="4" height="100%">
                <VStack
                  spacing="4"
                  align="flex-start"
                  height="100%"
                  justify="space-between">
                  <VStack spacing="4" align="flex-start">
                    <Heading fontSize="2xl" fontWeight="normal">
                      {name}
                    </Heading>

                    <Text color="gray.600">{description}</Text>
                  </VStack>
                  <Flex>
                    <AvatarGroup size="sm" max={3}>
                      {users.map(({ picture, nickname }) => (
                        <Avatar src={picture} name={nickname} key={nickname} />
                      ))}
                    </AvatarGroup>
                  </Flex>
                </VStack>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};
export default Dashboard;
