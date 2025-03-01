/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React, { useState } from "react";
import {
  Control,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import InputField from "../_component/formFields/formFieldsComponent";
import Button from "../_component/button/button";
import { validationRules } from "../_libs/constant";
import { Eye, EyeOff } from "lucide-react";
import Style from "../_commonCss/loginStyle.module.scss";

interface SignUpSceneProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  control?: Control<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleSignUp: (data: FieldValues) => void;
  isloding?: boolean;
  getValues: (name?: string) => any;
}

const SignUpScene = (props: SignUpSceneProps) => {
  const {
    register,
    formState,
    handleSubmit,
    handleSignUp,
    isloding,
    getValues,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className={`${Style.signupContainer}`}>
        <div className={`${Style.signupCard}`}>
          <h2 className={`${Style.signupTitle}`}>Create Account</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <InputField
              type="text"
              name="name"
              placeholder="Enter name"
              register={register}
              validationRules={validationRules.name}
              errors={formState.errors}
            />

            <InputField
              type="email"
              name="email"
              placeholder="Enter Email"
              register={register}
              validationRules={validationRules.email}
              errors={formState.errors}
            />
            <div className="flex items-center relative">
              <div className="w-full">
                <InputField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  register={register}
                  validationRules={validationRules.password}
                  errors={formState.errors}
                />
              </div>
              <div className="absolute right-0 top-0 mt-4 mr-3">
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-black cursor-pointer"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-black cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center relative">
              <div className="w-full">
                <InputField
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  register={register}
                  validationRules={validationRules.confirmPassword(getValues)}
                  errors={formState.errors}
                />
              </div>
              <div className="absolute right-0 top-0 mt-4 mr-3">
                {showConfirmPassword ? (
                  <EyeOff
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-black cursor-pointer"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-black cursor-pointer"
                  />
                )}
              </div>
            </div>
            <Button
              type="submit"
              buttonText="Sign Up"
              isloding={isloding}
              disabled={isloding}
            />
          </form>
          <Button type="submit" disabled={isloding}>
            <Link href={"/login"} className="no-underline text-white">
              <span>Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpScene;
