import axios from "axios";

export const getGroupInfo = async () => {
  const { data } = await axios.get("/categories/1");
  return data;
};
