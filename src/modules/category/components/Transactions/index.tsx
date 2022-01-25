import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { FullGroup } from "modules/category/types";
import EmptyTransactions from "../EmptyTransactions";
import TransactionItem from "../TransactionItem";

type TransactionsProps = {
  group: FullGroup;
};

const Transactions = ({ group }: TransactionsProps) => {
  const { t } = useTranslation("category");

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
          <Button colorScheme="blue">{t("create-transaction")}</Button>
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
    </Box>
  );
};
export default Transactions;
