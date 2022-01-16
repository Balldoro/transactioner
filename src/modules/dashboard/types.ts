export type Group = {
  name: string;
  description: string;
  icon: string;
  currency: string;
  users: { nickname: string; picture: string }[];
};
