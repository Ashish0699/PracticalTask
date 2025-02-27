import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FieldStyle from "./formFieldsStyles.module.scss";

interface InputFieldProps {
  type?: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  validationRules?: object;
  className?: string;
  errors?: FieldErrors;
  label?: string;
}
export const InputField = (props: InputFieldProps) => {
  const {
    type = "text",
    name,
    placeholder,
    register,
    validationRules,
    className,
    errors,
    label,
    ...rest
  } = props;
  return (
    <div>
      {label && <label>{label}</label>}

      <input
        type={type}
        {...register(name, validationRules)}
        placeholder={placeholder}
        className={` ${FieldStyle.inputField} ${className}`}
        {...rest}
      />

      {/* Show error message  */}
      {typeof errors?.[name]?.message === "string" && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
