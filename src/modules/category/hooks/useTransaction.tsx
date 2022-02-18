import { useEffect, useState } from "react";
import { useRadioGroup } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useController, useForm } from "react-hook-form";

import { getTransactionCategories } from "../api";
import { Category, TransactionFormValues } from "../types";
import transactionScheme from "../schemas/transactionScheme";
import { getFriends } from "modules/dashboard/api";
import { User } from "modules/dashboard/types";
import { isYupRequired } from "utils/isYupRequired";

const useTransaction = (defaultValues: TransactionFormValues) => {
  const formMethods = useForm<TransactionFormValues>({
    defaultValues,
    resolver: yupResolver(transactionScheme),
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
      const categories = await getTransactionCategories();
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

  const isFieldRequired = (field: keyof TransactionFormValues) =>
    isYupRequired(transactionScheme, field);

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
export default useTransaction;
