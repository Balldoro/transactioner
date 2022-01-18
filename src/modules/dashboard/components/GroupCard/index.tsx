import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Image,
  AvatarGroup,
  Text,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Group } from "modules/dashboard/types";
import { RoutePaths } from "routes/RoutePaths";
import GroupCardMenu from "../GroupCardMenu";

type GroupCardProps = Group;

const GroupCard = (group: GroupCardProps) => {
  const { t } = useTranslation("dashboard");
  const { name, icon, description, users, id } = group;

  return (
    <Flex
      as="section"
      direction="column"
      key={name}
      borderRadius="lg"
      p="4"
      bg="white">
      <Flex justify="space-between">
        <Image src={icon} boxSize="32px" alt={t("group-icon")} />
        <GroupCardMenu group={group} />
      </Flex>
      <VStack
        pt="4"
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
        <Flex justify="space-between" width="100%">
          <AvatarGroup size="sm" max={3}>
            {users.map(({ picture, nickname }) => (
              <Avatar src={picture} name={nickname} key={nickname} />
            ))}
          </AvatarGroup>
          <Button
            as={Link}
            to={`${RoutePaths.GROUP}/${id}`}
            colorScheme="blue"
            size="sm">
            {t("go-to-group")}
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default GroupCard;
