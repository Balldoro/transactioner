import { Group, User } from "modules/dashboard/types";

export type Transaction = {
  id: number;
  category: TransactionCategory;
  name: string;
  amount: number;
  date: string;
  isPayed: boolean;
  addedBy: User;
  involvedUsers: User[];
};

type TransactionCategory = {
  name: string;
  picture: string;
};

export type FullGroup = Group & {
  transactions: Transaction[];
};
