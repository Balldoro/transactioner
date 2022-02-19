import { REQUIRED_MESSAGE } from "utils/validationMessages";
import * as yup from "yup";

const transactionScheme = yup
  .object({
    category: yup.string().required(REQUIRED_MESSAGE).trim(),
    name: yup.string().required(REQUIRED_MESSAGE).trim(),
    date: yup.date().required(REQUIRED_MESSAGE),
    amount: yup.string().required(REQUIRED_MESSAGE).trim(),
    payedBy: yup.string().required(REQUIRED_MESSAGE),
    involvedUsers: yup.array().of(yup.string()),
  })
  .required();

export default transactionScheme;
