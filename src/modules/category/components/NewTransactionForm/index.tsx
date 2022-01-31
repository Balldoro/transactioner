import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Controller, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useAuthContext } from "modules/auth/contexts/AuthContext";
import ControlWrapper from "components/Inputs/ControlWrapper";
import useNewTransaction from "modules/category/hooks/useNewTransaction";
import CategoryIconRadio from "components/CategoryIconRadio";
import LoadingSpinner from "components/LoadingSpinner";
import { NewTransactionFormValues } from "modules/category/types";

const defaultValues = {
  category: "",
  title: "",
  date: "",
  amount: "",
  friends: [],
};

const NewTransactionForm = () => {
  const { t } = useTranslation(["category", "common"]);
  const { user } = useAuthContext();

  const {
    formMethods,
    friends,
    isFieldRequired,
    isLoading,
    categories,
    getRadioProps,
    getRootProps,
  } = useNewTransaction(defaultValues);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = formMethods;

  if (isLoading) {
    return <LoadingSpinner size="lg" isCentered />;
  }

  const submit: SubmitHandler<NewTransactionFormValues> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <VStack spacing="4" align="flex-start">
        <ControlWrapper
          isRequired={isFieldRequired("category")}
          label={t("category:category")}
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
                //@ts-ignore
                label={t(`category:category-${name}`)}
              />
            ))}
          </SimpleGrid>
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("title")}
          label={t("category:title")}
          error={errors.title?.message}>
          <Input {...register("title")} autoFocus />
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("amount")}
          label={t("category:amount")}
          error={errors.amount?.message}>
          <Input {...register("amount")} type="number" />
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
          Utwórz
        </Button>
      </VStack>
    </form>
  );
};
export default NewTransactionForm;
