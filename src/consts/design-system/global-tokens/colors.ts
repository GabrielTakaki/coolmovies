import { COLORS } from "../definitions";

type Colors = {
  [key in "dark"]: string;
} & {
  [key in COLORS]: {
    [key in "main" | "contrastText"]: string;
  };
};

export const COLOR_TOKENS: Colors = {
  primary: {
    main: "#3F4B3E",
    contrastText: "#fff",
  },
  secondary: {
    main: "#ED782B",
    contrastText: "#fff",
  },
  info: {
    main: "#6B8E23",
    contrastText: "#fff",
  },
  dark: "#1C120D",
};
