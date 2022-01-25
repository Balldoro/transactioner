import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
  Image,
  Button,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  AvatarGroup,
  Avatar,
  Divider,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AwesomeIcon from "components/AwesomeIcon";
import { Transaction } from "modules/category/types";
import { useTranslation } from "react-i18next";
import DeleteTransactionModal from "../DeleteTransactionModal";

type TransactionDrawerProps = {
  transaction: Transaction;
  currency: string;
  isOpen: boolean;
  handleClose: () => void;
};

const TransactionDrawer = ({
  isOpen,
  transaction,
  currency,
  handleClose,
}: TransactionDrawerProps) => {
  const { category, name, amount, involvedUsers, date, id } = transaction;

  const { t } = useTranslation("common");

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const deleteTransaction = () => {
    closeDeleteModal();
    handleClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={handleClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Flex align="center">
            <Image
              src={category.picture}
              alt={category.name}
              boxSize="32px"
              mr="4"
            />
            <Heading
              fontWeight="medium"
              fontSize="xl"
              isTruncated
              width="80%"
              as="h2">
              {name}
            </Heading>
          </Flex>
        </DrawerHeader>
        <Divider />
        <DrawerBody mt="2">
          <VStack spacing="4" align="flex-start" width="100%">
            <HStack spacing="4">
              <Button
                size="sm"
                leftIcon={<AwesomeIcon icon={faEdit} />}
                variant="outline"
                colorScheme="blue">
                {t("edit")}
              </Button>
              <Button
                onClick={openDeleteModal}
                size="sm"
                leftIcon={<AwesomeIcon icon={faTrash} />}
                variant="outline"
                colorScheme="red">
                {t("delete")}
              </Button>
            </HStack>
            <Stat>
              <StatLabel>{t("name")}</StatLabel>
              <StatNumber fontSize="xl">{name}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("amount")}</StatLabel>
              <StatNumber fontSize="xl">
                {amount} {currency}
              </StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("date")}</StatLabel>
              <StatNumber fontSize="xl">{date}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("friends")}</StatLabel>
              <AvatarGroup size="sm" max={3}>
                {involvedUsers.map(({ picture, nickname }) => (
                  <Avatar src={picture} name={nickname} key={nickname} />
                ))}
              </AvatarGroup>
            </Stat>
          </VStack>
        </DrawerBody>
      </DrawerContent>
      <DeleteTransactionModal
        isOpen={isDeleteModalOpen}
        handleClose={closeDeleteModal}
        handleConfirm={deleteTransaction}
        name={name}
        id={id}
      />
    </Drawer>
  );
};
export default TransactionDrawer;
