import {
  Avatar,
  Flex,
  Heading,
  Icon,
  VStack,
  Image,
  AvatarGroup,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group } from "modules/dashboard/types";
import { useTranslation } from "react-i18next";

type GroupCardProps = Group;

const GroupCard = ({ name, icon, description, users }: GroupCardProps) => {
  const { t } = useTranslation("dashboard");
  return (
    <Flex
      as="section"
      direction="column"
      key={name}
      borderRadius="lg"
      p="4"
      bg="white">
      <Flex justify="space-between">
        <Image src={icon} boxSize="32px" />
        <IconButton
          size="sm"
          variant="unstyled"
          icon={
            <Icon as={FontAwesomeIcon} icon={faEllipsisV} color="gray.400" />
          }
          aria-label={t("open-group-menu")}
        />
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
};
export default GroupCard;
