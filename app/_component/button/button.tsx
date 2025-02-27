import React from "react";
import Style from "./buttonStyles.module.scss";

interface ButtonProps {
  isloding?: boolean;
  buttonText?: string;
  disabled?: boolean;
  type?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  bgColor?: string;
}
const Button = (props: ButtonProps) => {
  const { isloding, buttonText, disabled, children, onClick, className } =
    props;
  return (
    <>
      <button
        type={"submit"}
        onClick={onClick}
        className={`${Style.buttonStyle} gap-1 disabled=${disabled} ${className} `}
      >
        {!isloding ? (
          <span>{buttonText}</span>
        ) : (
          <span>Loding....</span>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
