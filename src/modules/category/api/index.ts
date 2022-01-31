import axios from "axios";
import { Category } from "../types";

export const getGroupInfo = async () => {
  const { data } = await axios.get("/categories/1");
  return data;
};

export const getTransactionCategories = async () => {
  const { data } = await axios.get<Category[]>("/transaction-groups");
  return data;
};
