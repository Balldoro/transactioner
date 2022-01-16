import {
  Avatar,
  Flex,
  Heading,
  VStack,
  Image,
  AvatarGroup,
  Text,
} from "@chakra-ui/react";

import { Group } from "modules/dashboard/types";
import GroupCardMenu from "../GroupCardMenu";

type GroupCardProps = Group;

const GroupCard = ({ name, icon, description, users }: GroupCardProps) => (
  <Flex
    as="section"
    direction="column"
    key={name}
    borderRadius="lg"
    p="4"
    bg="white">
    <Flex justify="space-between">
      <Image src={icon} boxSize="32px" />
      <GroupCardMenu />
    </Flex>

    <VStack
      py="4"
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
      <AvatarGroup size="sm" max={3}>
        {users.map(({ picture, nickname }) => (
          <Avatar src={picture} name={nickname} key={nickname} />
        ))}
      </AvatarGroup>
    </VStack>
  </Flex>
);

export default GroupCard;
