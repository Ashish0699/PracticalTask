import Link from "next/link";
import React, { useState } from "react";
import {
  Control,
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Style from "../_commonCss/loginStyle.module.scss";
import InputField from "../_component/formFields/formFieldsComponent";
import Button from "../_component/button/button";
import { validationRules } from "../_libs/constant";
import { Eye, EyeOff } from "lucide-react";

interface LoginSceneProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  control?: Control<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleLogin: (data: FieldValues) => void;
  isloding?: boolean;
}
const LoginScene = (props: LoginSceneProps) => {
  const { register, formState, handleLogin, handleSubmit, isloding } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={`${Style.signupContainer}`}>
        <div className={`${Style.signupCard}`}>
          <h2 className={`${Style.signupTitle}`}>Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <InputField
              type="email"
              name="email"
              placeholder="Enter Email"
              register={register}
              validationRules={validationRules.email}
              className={Style.inputField}
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
                  className={Style.inputField}
                  errors={formState.errors}
                />
              </div>
              <div className="absolute right-0 top-0 mt-4 mr-3">
                {showPassword ? (
                  <EyeOff
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-black"
                  />
                ) : (
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-black"
                  />
                )}
              </div>
            </div>

            <Button
              type="submit"
              buttonText="Login"
              isloding={isloding}
              disabled={isloding}
            />
          </form>

          <Button type="submit" disabled={isloding}>
            <Link href={"/signup"} className="no-underline text-white">
              <span>SignUp</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginScene;
