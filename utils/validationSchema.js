import * as yup from "yup";

export const loginValidation = yup.object({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(6).required().label("Password"),
});
export const forgetValidation = yup.object({
  email: yup.string().email().required().label("Email"),
});
export const changePasswordValidation = yup.object({
  currentPassword: yup
    .string()
    .required("Current password is required")
    .min(6, "Current password must be at least 6 characters long"),
  password: yup
    .string()
    .required("New password is required")
    .min(6, "New password must be at least 6 characters long")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .notOneOf(
      [yup.ref("currentPassword"), null],
      "New password cannot be the same as current password"
    ),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const resetPasswordValidation = yup.object({
  password: yup
    .string()
    .required("New password is required")
    .min(6, "New password must be at least 6 characters long")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .notOneOf(
      [yup.ref("currentPassword"), null],
      "New password cannot be the same as current password"
    ),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
export const signupValidation = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().when("showPhone", {
    is: true,
    then: yup.string().required("Phone number is required"),
  }),
  address: yup.string().when("showAddress", {
    is: true,
    then: yup.string().required("Address is required"),
  }),
  dob: yup.string().when("showDob", {
    is: true,
    then: yup.string().required("Date of birth is required"),
  }),
});

export const loanValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  lastname: yup.string().required("Last name is required"),
  netMonthlyIncome: yup.number().required("Net monthly income is required"),
  maritalStatus: yup.string().required("Marital status is required"),
  education: yup.string().required("Education is required"),
  gender: yup.string().required("Gender is required"),
  fatherName: yup.string().required("Father's name is required"),
  panCard: yup.string().required("PAN card is required"),
  resident: yup.string().required("Resident status is required"),
  occupation: yup.string().required("Occupation is required"),
});
