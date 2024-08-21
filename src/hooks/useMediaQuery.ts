import { useTheme } from "@mui/material/styles";
import useMuiMediaQuery from "@mui/material/useMediaQuery";
import { Breakpoint } from "@mui/system/createTheme/createBreakpoints";

const useMediaQuery = (query: Breakpoint) => {
  const theme = useTheme();
  return useMuiMediaQuery(theme.breakpoints.up(query));
};

export default useMediaQuery;
