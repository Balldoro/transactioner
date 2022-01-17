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
