import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import friendsJSON from "modules/dashboard/api/friends.json";
import categoriesJSON from "modules/dashboard/api/categories.json";
import { User } from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";

type NewGroupModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const NewGroupModal = ({ isOpen, handleClose }: NewGroupModalProps) => {
  const { user } = useAuthContext();
  const [friends, setFriends] = useState<User[]>(friendsJSON);
  const [categories, setCategories] = useState<any[]>(categoriesJSON);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  return (
    <Modal
      onClose={handleClose}
      isOpen={isOpen}
      isCentered
      scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new group</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb="4">
          <form>
            <VStack spacing="4" align="flex-start">
              <SimpleGrid minChildWidth="48px" width="100%" spacing="4">
                {categories.map(({ src, name }) => (
                  <IconButton
                    key={name}
                    maxW="48px"
                    onClick={() => setSelectedIcon(name)}
                    {...(selectedIcon === name && {
                      bg: "blue.200",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: "blue.600",
                    })}
                    _hover={{ bg: "blue.200" }}
                    icon={
                      <Image src={src} borderRadius="full" boxSize="32px" />
                    }
                    size="lg"
                    aria-label="group icon"
                    alignSelf="flex-start"
                    borderRadius="full"
                  />
                ))}
              </SimpleGrid>

              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Currency</FormLabel>
                <Select placeholder="Choose currency">
                  <option value="option1">PLN</option>
                  <option value="option2">EUR</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Friends</FormLabel>
                <VStack spacing="4" align="flex-start">
                  <Checkbox isDisabled defaultChecked>
                    <Avatar size="xs" src={user?.picture} mr="2" />
                    {user?.nickname} (You)
                  </Checkbox>
                  {friends.map(({ nickname, picture }) => (
                    <Checkbox key={nickname}>
                      <Avatar size="xs" src={picture} mr="2" />
                      {nickname}
                    </Checkbox>
                  ))}
                </VStack>
              </FormControl>
              <Button colorScheme="blue" isFullWidth>
                Create
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default NewGroupModal;
