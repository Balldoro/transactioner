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
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import friendsJSON from "modules/dashboard/api/friends.json";
import categoriesJSON from "modules/dashboard/api/categories.json";
import { Category, NewGroupFormValues, User } from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import ControlWrapper from "components/Inputs/ControlWrapper";
import CategoryIconRadio from "../CategoryIconRadio";
import newGroupScheme from "modules/dashboard/schemas/newGroupScheme";
import { isYupRequired } from "utils/isYupRequired";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "routes/RoutePaths";

const defaultValues: NewGroupFormValues = {
  category: "",
  title: "",
  description: "",
  currency: "PLN",
  friends: [],
};

const isFieldRequired = (field: keyof NewGroupFormValues) =>
  isYupRequired(newGroupScheme, field);

const NewGroupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<NewGroupFormValues>({
    defaultValues,
    resolver: yupResolver(newGroupScheme),
  });

  const navigate = useNavigate();
  const { t } = useTranslation(["dashboard", "common"]);
  const { user } = useAuthContext();
  const { field } = useController({ control, name: "category" });
  const { getRootProps, getRadioProps } = useRadioGroup({ ...field });

  const [friends] = useState<User[]>(friendsJSON);
  const [categories] = useState<Category[]>(categoriesJSON);

  const submit = handleSubmit(data => {
    console.log(data);
    navigate(`${RoutePaths.GROUP}/${data.title}`);
  });

  return (
    <form onSubmit={submit} noValidate>
      <VStack spacing="4" align="flex-start">
        <ControlWrapper
          isRequired={isFieldRequired("category")}
          label={t("dashboard:category")}
          error={errors.category?.message}>
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

        <ControlWrapper
          isRequired={isFieldRequired("title")}
          label={t("dashboard:title")}
          error={errors.title?.message}>
          <Input {...register("title")} />
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("description")}
          label={t("dashboard:description")}
          error={errors.description?.message}>
          <Input {...register("description")} />
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("currency")}
          label={t("common:currency")}
          error={errors.currency?.message}>
          <Select {...register("currency")}>
            <option value="PLN">PLN</option>
          </Select>
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("friends")}
          label={t("dashboard:friends")}>
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
          {t("common:create")}
        </Button>
      </VStack>
    </form>
  );
};
export default NewGroupForm;
