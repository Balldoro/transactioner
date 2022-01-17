import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, Controller, useController } from "react-hook-form";

import friendsJSON from "modules/dashboard/api/friends.json";
import categoriesJSON from "modules/dashboard/api/categories.json";
import { User } from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import CategoryIconRadio from "../CategoryIconRadio";

type NewGroupModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

type NewGroupFormValues = {
  category: string;
  title: string;
  description?: string;
  currency: Currency;
  friends: string[];
};

type Currency = "PLN";

const defaultValues: NewGroupFormValues = {
  category: "",
  title: "",
  description: "",
  currency: "PLN",
  friends: [],
};

const NewGroupModal = ({ isOpen, handleClose }: NewGroupModalProps) => {
  const { user } = useAuthContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<NewGroupFormValues>({ defaultValues });

  const { field } = useController({ control, name: "category" });

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });
  const [friends] = useState<User[]>(friendsJSON);
  const [categories] = useState<any[]>(categoriesJSON);

  const submit = handleSubmit(data => {
    console.log(data);
  });

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
          <form onSubmit={submit}>
            <VStack spacing="4" align="flex-start">
              <FormControl isInvalid={Boolean(errors.category)}>
                <FormLabel>Category</FormLabel>
                <SimpleGrid
                  minChildWidth="48px"
                  width="100%"
                  spacing="4"
                  {...getRootProps()}>
                  {categories.map(({ src, name }) => (
                    <CategoryIconRadio
                      key={name}
                      radioProps={getRadioProps({ value: name })}
                      src={src}
                    />
                  ))}
                </SimpleGrid>
              </FormControl>

              <FormControl isInvalid={Boolean(errors.title)}>
                <FormLabel>Title</FormLabel>
                <Input
                  {...register("title", {
                    required: "This field is required!",
                  })}
                />
                {errors.title && (
                  <FormErrorMessage>{errors.title.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={Boolean(errors.description)}>
                <FormLabel>Description</FormLabel>
                <Input {...register("description")} />
                {errors.description && (
                  <FormErrorMessage>
                    {errors.description.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={Boolean(errors.currency)}>
                <FormLabel>Currency</FormLabel>
                <Select {...register("currency", { required: "oblig" })}>
                  <option value="PLN">PLN</option>
                </Select>
                {errors.currency && (
                  <FormErrorMessage>{errors.currency.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={Boolean(errors.friends)}>
                <FormLabel>Friends</FormLabel>
                <VStack spacing="4" align="flex-start">
                  <Checkbox
                    isDisabled
                    defaultChecked
                    {...register("friends")}
                    name="user">
                    <Avatar size="xs" src={user?.picture} mr="2" />
                    {user?.nickname} (You)
                  </Checkbox>
                  {friends.map(({ nickname, picture }) => (
                    <Controller
                      key={nickname}
                      control={control}
                      name="friends"
                      render={({ field: { ref, ...rest } }) => (
                        <CheckboxGroup {...rest}>
                          <Checkbox value={nickname} textTransform="capitalize">
                            <Avatar size="xs" src={picture} mr="2" />
                            {nickname}
                          </Checkbox>
                        </CheckboxGroup>
                      )}
                    />
                  ))}
                </VStack>
              </FormControl>
              <Button type="submit" colorScheme="blue" isFullWidth>
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
