import React from "react";
import { Box as MuiBox, BoxProps } from "@mui/material";

type Props = {
  children?: React.ReactNode;
} & Omit<BoxProps, "component"> & { component: BoxProps["component"] };

function Box({ children, ...props }: Props) {
  return <MuiBox {...props}>{children}</MuiBox>;
}

export default Box;
