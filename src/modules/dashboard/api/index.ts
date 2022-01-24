import axios from "axios";
import { Category, Group, User } from "../types";

export const getFriends = async () => {
  const { data } = await axios.get<User[]>("/friends");
  return data;
};

export const getCategories = async () => {
  const { data } = await axios.get<Category[]>("/categories");
  return data;
};

export const getGroups = async () => {
  const { data } = await axios.get<Group[]>("/groups");
  return data;
};
