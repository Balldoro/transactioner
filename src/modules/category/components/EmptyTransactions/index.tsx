import { Flex, VStack, Heading } from "@chakra-ui/react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import AwesomeIcon from "components/AwesomeIcon";
import { useTranslation } from "react-i18next";

const EmptyTransactions = () => {
  const { t } = useTranslation("category");
  return (
    <Flex align="center" justify="center" pt="12" width="100%">
      <VStack spacing="8">
        <AwesomeIcon icon={faBoxOpen} size="5x" color="gray.300" />
        <Heading textAlign="center" fontWeight="medium">
          {t("you-dont-have-transactions")}
        </Heading>
      </VStack>
    </Flex>
  );
};

export default EmptyTransactions;
