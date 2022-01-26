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
import { useEffect, useState } from "react";
import { useForm, Controller, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  Category,
  Group,
  NewGroupFormValues,
  User,
} from "modules/dashboard/types";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import ControlWrapper from "components/Inputs/ControlWrapper";
import CategoryIconRadio from "../CategoryIconRadio";
import newGroupScheme from "modules/dashboard/schemas/newGroupScheme";
import { isYupRequired } from "utils/isYupRequired";
import { RoutePaths } from "routes/RoutePaths";
import { getFriends, getCategories } from "modules/dashboard/api";
import LoadingSpinner from "components/LoadingSpinner";

const isFieldRequired = (field: keyof NewGroupFormValues) =>
  isYupRequired(newGroupScheme, field);

type EditGroupFormProps = { group: Group };

const EditGroupForm = ({
  group: { category, title, description, currency, users },
}: EditGroupFormProps) => {
  const defaultValues: NewGroupFormValues = {
    category: category.name,
    title,
    description,
    currency,
    friends: users.map(({ nickname }) => nickname),
  };

  const { t } = useTranslation(["dashboard", "common"]);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<NewGroupFormValues>({
    defaultValues,
    resolver: yupResolver(newGroupScheme),
  });

  const { field } = useController({ control, name: "category" });
  const { getRootProps, getRadioProps } = useRadioGroup({ ...field });

  const [friends, setFriends] = useState<User[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFriends = async () => {
      const friends = await getFriends();
      setFriends(friends);
    };

    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    const fetchData = async () => {
      setIsLoading(true);
      await fetchFriends();
      await fetchCategories();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const submit = handleSubmit(data => {
    navigate(`${RoutePaths.GROUP}/${data.title}`);
  });

  if (isLoading) {
    return <LoadingSpinner size="lg" isCentered />;
  }

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
          {t("common:edit")}
        </Button>
      </VStack>
    </form>
  );
};
export default EditGroupForm;
