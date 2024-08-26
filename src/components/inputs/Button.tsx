import React from "react";
import { Button as MuiButton } from "@mui/material";
import { SIZES, VARIANTS } from "../../consts/design-system/definitions";

type ButtonProps = {
  color?: "primary" | "secondary" | "info";
  variant?: VARIANTS;
  disabled?: boolean;
  onClick?: () => void;
  size?: SIZES;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "trailing" | "leading";
  type?: "button" | "submit";
};

function Button({
  size = "small",
  color = "primary",
  variant = "contained",
  iconPosition = "trailing",
  icon,
  label,
  ...props
}: ButtonProps) {
  return (
    <MuiButton
      {...props}
      endIcon={iconPosition === "trailing" && icon ? icon : null}
      startIcon={iconPosition === "leading" && icon ? icon : null}
      variant={variant}
      color={color}
      size={size}
    >
      {label}
    </MuiButton>
  );
}

export default Button;
