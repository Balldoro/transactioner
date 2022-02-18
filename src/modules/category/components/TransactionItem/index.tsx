import {
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

import AwesomeIcon from "components/AwesomeIcon";
import { Transaction } from "modules/category/types";
import TransactionDrawer from "../TransactionDrawer";

type TransactionItemProps = {
  transaction: Transaction;
  currency: string;
};

const TransactionItem = ({ transaction, currency }: TransactionItemProps) => {
  const { category, name, date, amount } = transaction;

  const {
    isOpen: isTransactionDrawerOpen,
    onClose: closeTransactionDrawer,
    onOpen: openTransactionDrawer,
  } = useDisclosure();

  return (
    <VStack
      width="100%"
      direction="column"
      spacing="2"
      justify="space-between"
      align="flex-start"
      p="4"
      bg="white"
      borderRadius="lg">
      <Flex justify="space-between" align="center" width="100%">
        <Image src={category.picture} boxSize="32px" alt={category.name} />
        <IconButton
          variant="unstyled"
          size="sm"
          icon={<AwesomeIcon icon={faChevronRight} />}
          aria-label="more"
          color="blue.500"
          onClick={openTransactionDrawer}
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
            {format(new Date(date), "dd-MM-yyyy")}
          </Text>
        </Flex>
      </Flex>

      <TransactionDrawer
        transaction={transaction}
        currency={currency}
        isOpen={isTransactionDrawerOpen}
        handleClose={closeTransactionDrawer}
      />
    </VStack>
  );
};
export default TransactionItem;
