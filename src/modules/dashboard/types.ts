export type Group = {
  id: number;
  title: string;
  description: string;
  category: Category;
  currency: Currency;
  users: User[];
};

export type User = {
  nickname: string;
  picture: string;
};

export type Currency = "PLN";

export type Category = {
  name: string;
  src: string;
};

export type NewGroupFormValues = {
  category: string;
  title: string;
  description?: string;
  currency: Currency;
  friends: string[];
};
