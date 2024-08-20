import React from "react";
import { Typography } from "@mui/material";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "caption" | "body1" | "subtitle1";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
};

function Text({ variant = "body1", align = "left", children }: TextProps) {
  return (
    <Typography variant={variant} align={align}>
      {children}
    </Typography>
  );
}

export default Text;
