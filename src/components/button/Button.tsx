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
    <StyledButton type="button" {...props} onClick={handleOnClick}>
      {label}
    </StyledButton>
  );
};
