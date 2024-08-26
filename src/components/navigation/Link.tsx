import React from "react";
import { Link as MuiLink } from "@mui/material";
import { COLORS, LEVELS, WEIGHTS } from "@consts/design-system/definitions";
import { SYSTEM_COLORS } from "@consts/design-system/global-tokens/colors";

type LinkProps = {
  variant?: "h6" | "caption" | "body1" | "subtitle1" | "subtitle2";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
  color?: COLORS;
  level?: LEVELS;
  weight?: WEIGHTS;
  underline?: "none" | "hover" | "always";
  href?: string;
  onClick?: () => void;
};

function Link({
  variant = "body1",
  align = "left",
  children,
  color = "neutral",
  level = 900,
  weight = "regular",
  href,
  underline = "hover",
  onClick,
}: LinkProps) {
  const textColor = SYSTEM_COLORS[color][level];
  return (
    <MuiLink
      href={href}
      onClick={onClick}
      underline={underline}
      style={{
        fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 }[
          weight
        ],
        cursor: "pointer",
      }}
      color={textColor}
      variant={variant}
      align={align}
    >
      {children}
    </MuiLink>
  );
}

export default Link;
