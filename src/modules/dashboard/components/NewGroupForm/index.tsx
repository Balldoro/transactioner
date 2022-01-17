import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SimpleGrid,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, Controller, useController } from "react-hook-form";

import friendsJSON from "modules/dashboard/api/friends.json";
import categoriesJSON from "modules/dashboard/api/categories.json";
import { Currency, User } from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import ControlWrapper from "components/Inputs/ControlWrapper";
import CategoryIconRadio from "../CategoryIconRadio";

type NewGroupFormValues = {
  category: string;
  title: string;
  description?: string;
  currency: Currency;
  friends: string[];
};

const defaultValues: NewGroupFormValues = {
  category: "",
  title: "",
  description: "",
  currency: "PLN",
  friends: [],
};

const NewGroupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<NewGroupFormValues>({ defaultValues });

  const { user } = useAuthContext();
  const { field } = useController({
    control,
    name: "category",
    rules: { required: "Catgory required" },
  });
  const { getRootProps, getRadioProps } = useRadioGroup({ ...field });

  const [friends] = useState<User[]>(friendsJSON);
  const [categories] = useState<any[]>(categoriesJSON);

  const submit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={submit}>
      <VStack spacing="4" align="flex-start">
        <ControlWrapper label="Category" error={errors.category?.message}>
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
        </ControlWrapper>

        <ControlWrapper label="Title" error={errors.title?.message}>
          <Input
            {...register("title", {
              required: "This field is required!",
            })}
          />
        </ControlWrapper>

        <ControlWrapper label="Description" error={errors.description?.message}>
          <Input {...register("description")} />
        </ControlWrapper>

        <ControlWrapper label="Currency" error={errors.currency?.message}>
          <Select {...register("currency", { required: "obligatory" })}>
            <option value="PLN">PLN</option>
          </Select>
        </ControlWrapper>

        <ControlWrapper label="Friends">
          <VStack spacing="4" align="flex-start">
            <Checkbox isDisabled defaultChecked>
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
        </ControlWrapper>

        <Button type="submit" colorScheme="blue" isFullWidth>
          Create
        </Button>
      </VStack>
    </form>
  );
};
export default NewGroupForm;
