export const PAGE_SLUG = {
  HOME: "/",
  SIGNIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  PRODUCTPAGE: "/productPage",
};

export const validationRules = {
  name: {
    required: "name is required",
  },
  firstName: {
    required: "First name is required",
  },
  lastName: {
    required: "Last name is required",
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
};

export const TOAST_MESSAGE_DELAY = 5;
