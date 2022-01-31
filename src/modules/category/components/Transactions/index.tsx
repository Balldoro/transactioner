import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { FullGroup } from "modules/category/types";
import EmptyTransactions from "../EmptyTransactions";
import TransactionItem from "../TransactionItem";
import NewTransactionModal from "../NewTransactionModal";

type TransactionsProps = {
  group: FullGroup;
};

const Transactions = ({ group }: TransactionsProps) => {
  const { t } = useTranslation("category");

  const {
    isOpen: isNewTransactionModalOpen,
    onOpen: openNewTransactionModal,
    onClose: closeNewTransactionModal,
  } = useDisclosure();

  return (
    <Box overflowX="auto" width={{ sm: "100%", lg: "45%" }}>
      <VStack spacing="4" align="flex-start">
        <Flex
          align={{ md: "center" }}
          justify="space-between"
          width={{ base: "100%", sm: "auto", md: "100%" }}
          direction={{ base: "column", md: "row" }}>
          <Heading
            fontWeight="medium"
            fontSize="3xl"
            mb={{ base: "4", md: "0" }}>
            {t("transactions")}
          </Heading>
          <Button colorScheme="blue" onClick={openNewTransactionModal}>
            {t("create-transaction")}
          </Button>
        </Flex>

        {group.transactions.length === 0 ? (
          <EmptyTransactions />
        ) : (
          group.transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              currency={group.currency}
            />
          ))
        )}
      </VStack>

      {isNewTransactionModalOpen && (
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          handleClose={closeNewTransactionModal}
        />
      )}
    </Box>
  );
};
export default Transactions;
