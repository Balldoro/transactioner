import { useRadioGroup } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { isYupRequired } from "utils/isYupRequired";
import { getCategories, getFriends } from "../api";
import newGroupScheme from "../schemas/newGroupScheme";
import { Category, GroupFormValues, User } from "../types";

const useGroupForm = (defaultValues: GroupFormValues) => {
  const formMethods = useForm<GroupFormValues>({
    defaultValues,
    resolver: yupResolver(newGroupScheme),
  });

  const { field } = useController({
    control: formMethods.control,
    name: "category",
  });

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

  const isFieldRequired = (field: keyof GroupFormValues) =>
    isYupRequired(newGroupScheme, field);

  return {
    friends,
    categories,
    isLoading,
    formMethods,
    isFieldRequired,
    getRootProps,
    getRadioProps,
  };
};
export default useGroupForm;
