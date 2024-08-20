import React from "react";
import { Box, BoxProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
} & Omit<BoxProps, "component"> & { component: BoxProps["component"] };

function FlexRow({ children, ...props }: Props) {
  return (
    <Box display="flex" {...props}>
      {children}
    </Box>
  );
}

export default FlexRow;
