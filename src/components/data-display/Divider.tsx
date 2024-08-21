import React from "react";
import { Divider as MuiDivider } from "@mui/material";

function Divider({ spacing = "0px" }: { spacing?: string }) {
  return (
    <MuiDivider
      variant="inset"
      component="div"
      sx={{ marginLeft: 0, marginY: spacing }}
    />
  );
}

export default Divider;
