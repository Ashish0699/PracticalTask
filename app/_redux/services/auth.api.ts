/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const signupAPI = async (payload: any) => {
  return axios.post("https://api.escuelajs.co/api/v1/users/", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserList = async () => {
  return axios.get("https://api.escuelajs.co/api/v1/users", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginAPI = async (payload: any) => {
  return axios.post("https://api.escuelajs.co/api/v1/auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
