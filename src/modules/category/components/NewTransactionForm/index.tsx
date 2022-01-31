import {
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Currency } from "modules/dashboard/types";
import { NewTransactionFormValues } from "modules/category/types";
import useNewTransaction from "modules/category/hooks/useNewTransaction";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import ControlWrapper from "components/Inputs/ControlWrapper";
import CategoryIconRadio from "components/CategoryIconRadio";
import LoadingSpinner from "components/LoadingSpinner";
import DateInput from "components/Inputs/DateInput";

type NewTransactionFormProps = {
  submit: SubmitHandler<NewTransactionFormValues>;
  currency: Currency;
};

const NewTransactionForm = ({ currency, submit }: NewTransactionFormProps) => {
  const { t } = useTranslation(["category", "common"]);
  const { user } = useAuthContext();

  const userNickname = user?.nickname as string;

  const defaultValues: NewTransactionFormValues = {
    category: "",
    title: "",
    date: new Date(),
    amount: "",
    payedBy: userNickname,
    involvedUsers: [],
  };

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
    setValue,
    watch,
    formState: { errors },
  } = formMethods;

  const watchPayedBy = watch("payedBy");

  useEffect(() => {
    const setPayingUserAsInvolved = () => {
      const watchInvolvedUsers = watch("involvedUsers");
      setValue("involvedUsers", [...watchInvolvedUsers, watchPayedBy]);
    };

    setPayingUserAsInvolved();
  }, [watch, watchPayedBy, setValue]);

  if (isLoading) {
    return <LoadingSpinner size="lg" isCentered />;
  }

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
          <NumberInput w="100%" precision={2}>
            <InputGroup>
              <NumberInputField {...register("amount")} borderRightRadius="0" />
              <InputRightAddon children={currency} />
            </InputGroup>
          </NumberInput>
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("date")}
          label={t("category:date")}
          error={errors.date?.message}>
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <DateInput
                isError={Boolean(errors.date?.message)}
                selected={value}
                onChange={onChange}
              />
            )}
          />
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("payedBy")}
          label={t("category:payed-by")}
          error={errors.payedBy?.message}>
          <Select {...register("payedBy")}>
            <option value={userNickname}>{userNickname}</option>
            {friends.map(({ nickname }) => (
              <option key={nickname} value={nickname}>
                {nickname}
              </option>
            ))}
          </Select>
        </ControlWrapper>

        <ControlWrapper
          isRequired={isFieldRequired("involvedUsers")}
          label={t("category:for")}>
          <VStack spacing="4" align="flex-start">
            <Controller
              control={control}
              name="involvedUsers"
              render={({ field: { ref, ...rest } }) => (
                <CheckboxGroup {...rest}>
                  <Checkbox
                    isDisabled={watchPayedBy === userNickname}
                    value={userNickname}>
                    <Avatar size="xs" src={user?.picture} mr="2" />
                    {user?.nickname} (You)
                  </Checkbox>
                </CheckboxGroup>
              )}
            />

            {friends.map(({ nickname, picture }) => (
              <Controller
                key={nickname}
                control={control}
                name="involvedUsers"
                render={({ field: { ref, ...rest } }) => (
                  <CheckboxGroup {...rest}>
                    <Checkbox
                      isDisabled={watchPayedBy === nickname}
                      value={nickname}
                      textTransform="capitalize">
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
