import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import EmptyTransactions from "../EmptyTransactions";

type TransactionsProps = {
  group: any;
};

const Transactions = ({ group }: TransactionsProps) => {
  const { t } = useTranslation("category");

  return (
    <VStack spacing="4" align="flex-start">
      <Flex
        align={{ md: "center" }}
        justify="space-between"
        width={{ base: "100%", sm: "auto", md: "100%" }}
        direction={{ base: "column", md: "row" }}>
        <Heading fontWeight="medium" fontSize="3xl" mb={{ base: "4", md: "0" }}>
          {t("transactions")}
        </Heading>
        <Button colorScheme="blue">{t("create-new-transaction")}</Button>
      </Flex>

      {group.transactions.length === 0 && <EmptyTransactions />}
    </VStack>
  );
};
export default Transactions;
