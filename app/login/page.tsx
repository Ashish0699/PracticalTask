/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import LoginScene from "./loginScene";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { loginAPI } from "../_redux/services/auth.api";
import { PAGE_SLUG } from "../_libs/constant";

const LoginPage = () => {
  const { register, formState, control, handleSubmit,reset } = useForm<FieldValues>();
  const [isloding, setIsLoding] = useState(false);

  const router = useRouter();
  const [cookies, setCookie] = useCookies(["x-session-token"]);

  const handleLogin = async (data: FieldValues) => {
    try {
      const payload = { email: data.email, password: data.password };
      setIsLoding(true);
      if (payload) {
        const response = await loginAPI(payload);
        if (response && response.data) {
          setCookie("x-session-token", response.data.access_token);
          console.log("cookies", cookies);
          toast.success("Login successfully!");
          reset()
          router.push(PAGE_SLUG.DASHBOARD);
        }
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Invalid credentials. Please try again.");
    } finally {
      setIsLoding(false);
    }
  };

  return (
    <>
      <LoginScene
        {...{
          register,
          formState,
          control,
          handleSubmit,
          handleLogin,
          isloding,
        }}
      />
    </>
  );
};

export default LoginPage;
