import { SPACINGS } from "./global-tokens/spacings";

export type COLORS = "primary" | "secondary" | "info" | "neutral";
export type LEVELS = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type SIZES = "small" | "medium" | "large";
export type SPACING_SIZE = keyof typeof SPACINGS;
export type WEIGHTS = "regular" | "medium" | "semibold" | "bold";
export type VARIANTS = "outlined" | "contained" | "text";
