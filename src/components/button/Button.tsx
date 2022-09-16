import React from "react";
import { StyledButton, StyledButtonProps } from "./styled";

type OnClickEvent = React.MouseEvent<HTMLButtonElement>;

export interface ButtonProps extends StyledButtonProps {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick?: (e: OnClickEvent) => void;
}

export const Button = ({ label, onClick, ...props }: ButtonProps) => {
  function handleOnClick(event: OnClickEvent) {
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <button type="button" {...props} onClick={handleOnClick}>
      {label}
    </button>
  );
};
