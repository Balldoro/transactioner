import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Controller, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { GroupFormValues } from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import useGroupForm from "modules/dashboard/hooks/useGroupForm";
import ControlWrapper from "components/Inputs/ControlWrapper";
import LoadingSpinner from "components/LoadingSpinner";
import CategoryIconRadio from "../CategoryIconRadio";

type GroupFormProps = {
  defaultValues: GroupFormValues;
  submitText: string;
  submit: SubmitHandler<GroupFormValues>;
};

const GroupForm = ({ defaultValues, submitText, submit }: GroupFormProps) => {
  const { t } = useTranslation(["dashboard", "common"]);
  const { user } = useAuthContext();

  const {
    isLoading,
    friends,
    categories,
    formMethods,
    isFieldRequired,
    getRadioProps,
    getRootProps,
  } = useGroupForm(defaultValues);

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = formMethods;

  if (isLoading) {
    return <LoadingSpinner size="lg" isCentered />;
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
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
          <Input {...register("title")} autoFocus />
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
          label={t("common:friends")}>
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
          {submitText}
        </Button>
      </VStack>
    </form>
  );
};
export default GroupForm;
