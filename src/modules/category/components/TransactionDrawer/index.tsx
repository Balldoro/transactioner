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
import { useTranslation } from "react-i18next";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import AwesomeIcon from "components/AwesomeIcon";
import DeleteModal from "components/DeleteModal";
import { Transaction } from "modules/category/types";
import EditTransactionModal from "../EditTransactionModal";

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
  const { category, name, amount, involvedUsers, date } = transaction;

  const { t } = useTranslation(["common", "category"]);

  const {
    isOpen: isDeleteModalOpen,
    onOpen: openDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const {
    isOpen: isEditModalOpen,
    onOpen: openEditModal,
    onClose: closeEditModal,
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
                colorScheme="blue"
                onClick={openEditModal}>
                {t("common:edit")}
              </Button>
              <Button
                onClick={openDeleteModal}
                size="sm"
                leftIcon={<AwesomeIcon icon={faTrash} />}
                variant="outline"
                colorScheme="red">
                {t("common:delete")}
              </Button>
            </HStack>
            <Stat>
              <StatLabel>{t("common:name")}</StatLabel>
              <StatNumber fontSize="xl">{name}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("common:amount")}</StatLabel>
              <StatNumber fontSize="xl">
                {amount} {currency}
              </StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("common:date")}</StatLabel>
              <StatNumber fontSize="xl">{date}</StatNumber>
            </Stat>

            <Stat>
              <StatLabel>{t("common:friends")}</StatLabel>
              <AvatarGroup size="sm" max={3}>
                {involvedUsers.map(({ picture, nickname }) => (
                  <Avatar src={picture} name={nickname} key={nickname} />
                ))}
              </AvatarGroup>
            </Stat>
          </VStack>
        </DrawerBody>
      </DrawerContent>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        infoText={t("category:remove-transaction-confirm", { name })}
        handleClose={closeDeleteModal}
        handleConfirm={deleteTransaction}
        name={name}
      />

      <EditTransactionModal
        transaction={transaction}
        handleClose={closeEditModal}
        isOpen={isEditModalOpen}
      />
    </Drawer>
  );
};
export default TransactionDrawer;
