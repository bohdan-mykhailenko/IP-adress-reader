import * as Yup from "yup";

export const validationSchema = Yup.object({
  ipAddress: Yup.string()
    .required("IP Address is required")
    .matches(/^[0-9.]{8,16}$/, "Invalid IP Address! (e.g. 54.23.32.166)")
});
