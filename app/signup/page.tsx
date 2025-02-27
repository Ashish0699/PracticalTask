"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SignUpScene from "./signUpScene";
import { toast } from "react-toastify";
import { getUserList, signupAPI } from "../_redux/services/auth.api";

const SignUpPage = () => {
  const { register, formState, control, handleSubmit, reset } =
    useForm<FieldValues>();
  const [isloding, setIsLoding] = useState(false);

  const handleSignUp = async (data: FieldValues) => {
    try {
      setIsLoding(true);
      const payload = {
        email: data.email,
        name: data.name,
        password: data.password,
        avatar: "https://picsum.photos/800",
      };
      if (payload) {
        const res = await getUserList();
        const isEmailExists = res.data.some(
          (user: any) => user.email === payload.email
        );
        if (!isEmailExists) {
          const response = await signupAPI(payload);
          if (response && response.data) {
            toast.success("signUp successfully!");
            setIsLoding(false);
            reset();
          }
        } else {
          toast.error("Email already exists!");
          setIsLoding(false);
        }
      }
    } catch (error) {
      setIsLoding(false);
      console.log("e", error);
    }
  };

  return (
    <>
      <SignUpScene
        {...{
          register,
          formState,
          control,
          handleSubmit,
          handleSignUp,
          isloding,
        }}
      />
    </>
  );
};

export default SignUpPage;
