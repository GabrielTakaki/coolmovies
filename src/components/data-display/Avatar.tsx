import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";
import { SIZES } from "@consts/design-system/definitions";

function Avatar({
  src,
  alt,
  size = "small",
}: {
  src?: string;
  alt: string;
  size?: SIZES;
}) {
  return (
    <MuiAvatar
      alt={alt}
      src={src || ""}
      sx={
        {
          small: { width: 24, height: 24 },
          medium: { width: 34, height: 34 },
          large: { width: 56, height: 56 },
        }[size]
      }
    />
  );
}

export default Avatar;
