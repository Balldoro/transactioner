import DatePicker, {
  registerLocale,
  ReactDatePickerProps,
} from "react-datepicker";
import pl from "date-fns/locale/pl";
import en from "date-fns/locale/en-US";
import i18n from "services/i18n";

import { Input } from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

registerLocale("pl-PL", pl);
registerLocale("en", en);

type DateInputProps = ReactDatePickerProps & {
  isError?: boolean;
};

const DateInput = ({ isError, ...props }: DateInputProps) => (
  <DatePicker
    customInput={<Input />}
    locale={i18n.language}
    dateFormat="P"
    ariaInvalid={isError ? "true" : "false"}
    {...(isError && { wrapperClassName: "error" })}
    {...props}
  />
);
export default DateInput;
