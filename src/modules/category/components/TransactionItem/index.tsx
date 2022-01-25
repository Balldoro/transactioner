import {
  Avatar,
  AvatarGroup,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import AwesomeIcon from "components/AwesomeIcon";
import { Transaction } from "modules/category/types";

type TransactionItemProps = {
  transaction: Transaction;
  currency: string;
};

const TransactionItem = ({
  transaction: { category, name, date, amount, involvedUsers },
  currency,
}: TransactionItemProps) => {
  return (
    <VStack
      width="100%"
      direction="column"
      spacing="3"
      justify="space-between"
      align="flex-start"
      p="4"
      bg="white"
      borderRadius="lg">
      <Flex justify="space-between" align="center" width="100%">
        <Image src={category.picture} boxSize="32px" />
        <IconButton
          variant="unstyled"
          size="sm"
          icon={<AwesomeIcon icon={faChevronRight} />}
          aria-label="more"
          color="blue.500"
        />
      </Flex>

      <Flex justify="space-between" align="center" width="100%">
        <Flex direction="column">
          <Text
            fontWeight="medium"
            maxW={{ base: "100px", sm: "250px", md: "300px" }}
            isTruncated>
            {name}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {category.name}
          </Text>
        </Flex>

        <Flex direction="column">
          <Text fontWeight="medium" textAlign="right" minW="90px">
            {amount.toFixed(2)} {currency}
          </Text>
          <Text textAlign="right" fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Flex>
      </Flex>

      <AvatarGroup size="sm" max={3}>
        {involvedUsers.map(({ picture, nickname }: any) => (
          <Avatar src={picture} name={nickname} key={nickname} />
        ))}
      </AvatarGroup>
    </VStack>
  );
};
export default TransactionItem;
