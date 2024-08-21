import { LEVELS, COLORS } from "../definitions";

type Colors = {
  [key in "dark"]: string;
} & {
  [key in COLORS]: {
    [key in LEVELS]: string;
  };
};

export const SYSTEM_COLORS: Colors = {
  primary: {
    50: "#E1E7E0",
    100: "#B8C8B6",
    200: "#8F9D8A",
    300: "#6B7F65",
    400: "#4B5D52",
    500: "#3F4B3E",
    600: "#354238",
    700: "#2A342B",
    800: "#1F2A20",
    900: "#121D13",
  },
  neutral: {
    50: "#F7F7F7",
    100: "#E1E1E1",
    200: "#CFCFCF",
    300: "#B1B1B1",
    400: "#9E9E9E",
    500: "#7E7E7E",
    600: "#626262",
    700: "#515151",
    800: "#3B3B3B",
    900: "#222222",
  },
  secondary: {
    50: "#FDF2EB",
    100: "#F9E3D0",
    200: "#F6D0B1",
    300: "#F2BC92",
    400: "#EEA973",
    500: "#ED782B",
    600: "#CC6C25",
    700: "#AC601F",
    800: "#8C5419",
    900: "#6B4813",
  },
  info: {
    50: "#F2F7EC",
    100: "#DDEAC6",
    200: "#C7DCA1",
    300: "#B1CF7B",
    400: "#9CC255",
    500: "#6B8E23",
    600: "#5E7E1E",
    700: "#506E19",
    800: "#425E14",
    900: "#344F0F",
  },
  dark: "#1C120D",
};
