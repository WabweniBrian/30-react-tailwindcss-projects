export const formData = [
  {
    id: 1,
    label: "username",
    inputAttributes: {
      type: "text",
      name: "username",
      placeholder: "Enter Username..",
      pattern: "[a-zA-Z0-9]{3,20}",
      required: true,
    },
    errorMessage:
      "Username should be 3-20 characters and should not include whitespaces and special characters",
  },
  {
    id: 2,
    label: "email",
    inputAttributes: {
      type: "email",
      name: "email",
      placeholder: "Enter Email..",
      required: true,
    },
    errorMessage: "It should be a valid email address",
  },
  {
    id: 3,
    label: "password",
    inputAttributes: {
      type: "password",
      name: "password",
      placeholder: "Enter password..",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@;{}#&*$%^&*_-])[a-zA-Z0-9!@;{}#&*$%^&*_-]{6,20}",
    },
    errorMessage:
      "Password must be 6-30 characters long and include atleast a number, lowercase and uppercase characters",
  },
  {
    id: 4,
    label: "confirm Password",
    inputAttributes: {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm password..",
      pattern: "",
      required: true,
    },

    errorMessage: "Password do not match",
  },
];
