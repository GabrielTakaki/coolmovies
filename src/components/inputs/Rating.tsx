import React from "react";
import { Rating as MuiRating, RatingProps } from "@mui/material";
import Box from "../layout/Box";
import { SIZES } from "../../consts/design-system/definitions";

type Props = {
  readOnly?: boolean;
  value: number | null;
  disabled?: boolean;
  onChange?: RatingProps["onChange"];
  precision?: RatingProps["precision"];
  size?: SIZES;
  name?: string;
};

function Rating(props: Props) {
  return (
    <Box
      component="div"
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <MuiRating {...props} />
    </Box>
  );
}

export default Rating;
