import MuiTextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import { InputAdornment } from "@mui/material";

type Props = {
  type?: "password" | "email" | "text";
  label?: string;
  name: string;
  multiline?: boolean;
  rows?: number;
  fullWidth?: boolean;
  value: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  icon?: React.ReactNode | string;
  required?: boolean;
};

function TextField({ type = "text", icon, ...props }: Props) {
  return (
    <MuiTextField
      type={type}
      fullWidth
      size="small"
      InputProps={
        icon
          ? {
              startAdornment: (
                <InputAdornment position="start">{icon}</InputAdornment>
              ),
            }
          : {}
      }
      variant="outlined"
      {...props}
    />
  );
}

export default TextField;
