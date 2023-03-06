import yup from "yup";

const authRegisterValidatorSchema = yup.object({
  body: yup.object({
    name: yup
      .string("name must be a string")
      .required("name is a requried field"),
    email: yup
      .string("email must be a string")
      .email("must be a valid email")
      .required("email is a required field"),
    password: yup
      .string("password must be a string")
      .required("password is a required field"),
  }),
});

const authLoginValidatorSchema = yup.object({
  body: yup.object({
    name: yup.string("").required(""),
    email: yup.string("").email("").required(""),
    password: yup.string("").required(""),
  }),
});

export default { authLoginValidatorSchema, authRegisterValidatorSchema };
