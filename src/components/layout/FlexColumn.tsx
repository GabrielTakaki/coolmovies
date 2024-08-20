import React from "react";
import { Box, BoxProps } from "@mui/material";

type Props = {
  children: React.ReactNode;
} & Omit<BoxProps, "component"> & { component: BoxProps["component"] };

function FlexColumn({ children, ...props }: Props) {
  return (
    <Box display="flex" flexDirection="column" {...props}>
      {children}
    </Box>
  );
}

export default FlexColumn;
