import { REQUIRED_MESSAGE } from "utils/validationMessages";
import * as yup from "yup";

const newTransactionScheme = yup
  .object({
    category: yup.string().required(REQUIRED_MESSAGE).trim(),
    title: yup.string().required(REQUIRED_MESSAGE).trim(),
    date: yup.string(),
    amount: yup.string().required(REQUIRED_MESSAGE).trim(),
    friends: yup.array().of(yup.string()),
  })
  .required();

export default newTransactionScheme;
