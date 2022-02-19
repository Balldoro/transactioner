import { Group, User } from "modules/dashboard/types";

export type Transaction = {
  id: number;
  category: TransactionCategory;
  name: string;
  amount: number;
  date: string;
  isPayed: boolean;
  payedBy: User;
  involvedUsers: User[];
};

type TransactionCategory = {
  value: string;
  name: string;
  picture: string;
};

export type FullGroup = Group & {
  transactions: Transaction[];
};

export type TransactionFormValues = {
  category: string;
  name: string;
  amount: string;
  date: Date;
  payedBy: string;
  involvedUsers: string[];
};

export type Category = {
  name: string;
  src: string;
};
