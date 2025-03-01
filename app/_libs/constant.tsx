/* eslint-disable @typescript-eslint/no-explicit-any */
export const PAGE_SLUG = {
  HOME: "/",
  SIGNIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PRODUCTPAGE: "/product",
};

export const validationRules = {
  name: {
    required: "name is required",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },

  password: {
    required: "Password is required",
    pattern: {
      value: /^[A-Za-z0-9]+$/,
      message: "Password must contain only letters and numbers",
    },
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
  },
  confirmPassword: (getValues: any) => ({
    required: "Confirm Password is required",
    validate: (value: any) =>
      value === getValues("password") || "Passwords do not match",
  }),
};
