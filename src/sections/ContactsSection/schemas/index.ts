import { SendEmailRequest } from "@/sections/ContactsSection/types";
import * as Yup from "yup";

const validation = {
  required: Yup.string().trim().required("Required").min(1, "must be more than 1"),
};

export const index: Yup.ObjectSchema<SendEmailRequest> = Yup.object({
  name: validation.required.max(100, "must be less than 100"),
  email: validation.required.email("Invalid email address"),
  message: validation.required.max(10000, "must be less than 10000"),
});
