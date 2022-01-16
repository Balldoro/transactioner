import { Flex, VStack, Icon, Heading, Button } from "@chakra-ui/react";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";

const GroupsEmpty = () => {
  const { t } = useTranslation("dashboard");
  return (
    <Flex align="center" justify="center" height="100%">
      <VStack spacing="8">
        <Icon
          as={FontAwesomeIcon}
          icon={faBoxOpen}
          size="5x"
          color="gray.300"
        />
        <Heading textAlign="center" fontWeight="medium">
          {t("you-dont-have-groups")}
        </Heading>
        <Button as={Link} colorScheme="blue" to={RoutePaths.NEW_GROUP}>
          {t("create-new-group")}
        </Button>
      </VStack>
    </Flex>
  );
};
export default GroupsEmpty;
