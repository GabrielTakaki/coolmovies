import React from "react";
import { Button as MuiButton } from "@mui/material";
import {
  COLORS,
  SIZES,
  VARIANTS,
} from "../../consts/design-system/definitions";

type ButtonProps = {
  color?: COLORS;
  variant?: VARIANTS;
  disabled?: boolean;
  onClick?: () => void;
  size?: SIZES;
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "trailing" | "leading";
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
