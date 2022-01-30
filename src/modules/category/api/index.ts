import axios from "axios";

export const getGroupInfo = async () => {
  const { data } = await axios.get("/categories/1");
  return data;
};

export const getTransactionCategories = async () => {
  const { data } = await axios.get("/transaction-groups");
  return data;
};
