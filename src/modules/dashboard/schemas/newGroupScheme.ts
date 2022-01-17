import { REQUIRED_MESSAGE } from "utils/validationMessages";
import * as yup from "yup";

const newGroupScheme = yup
  .object({
    category: yup.string().required(REQUIRED_MESSAGE).trim(),
    title: yup.string().required(REQUIRED_MESSAGE).trim(),
    description: yup.string(),
    currency: yup.string().required(REQUIRED_MESSAGE),
    friends: yup.array().of(yup.string()),
  })
  .required();

export default newGroupScheme;
