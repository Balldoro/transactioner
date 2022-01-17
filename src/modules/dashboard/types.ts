export type Group = {
  id: number;
  name: string;
  description: string;
  icon: string;
  currency: string;
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
