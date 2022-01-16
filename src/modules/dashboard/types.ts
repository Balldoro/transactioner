export type Group = {
  id: number;
  name: string;
  description: string;
  icon: string;
  currency: string;
  users: { nickname: string; picture: string }[];
};
