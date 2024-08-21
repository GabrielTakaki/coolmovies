import React from "react";
import { Typography } from "@mui/material";
import {
  COLORS,
  LEVELS,
  WEIGHTS,
} from "../../consts/design-system/definitions";
import { SYSTEM_COLORS } from "../../consts/design-system/global-tokens/colors";

type TextProps = {
  variant?: "h6" | "caption" | "body1" | "subtitle1" | "subtitle2";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
  color?: COLORS;
  level?: LEVELS;
  weight?: WEIGHTS;
};

function Text({
  variant = "body1",
  align = "left",
  children,
  color = "neutral",
  level = 900,
  weight = "regular",
}: TextProps) {
  const textColor = SYSTEM_COLORS[color][level];
  return (
    <Typography
      style={{
        fontWeight: { regular: 400, medium: 500, semibold: 600, bold: 700 }[
          weight
        ],
      }}
      color={textColor}
      variant={variant}
      align={align}
    >
      {children}
    </Typography>
  );
}

export default Text;
