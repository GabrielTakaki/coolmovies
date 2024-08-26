import React, { useCallback } from "react";
import FlexRow from "../layout/FlexRow";
import AnimationIcon from "@mui/icons-material/Animation";
import { SPACINGS } from "../../consts/design-system/global-tokens/spacings";
import Link from "../navigation/Link";
import { useRouter } from "next/router";
import useMediaQuery from "../../hooks/useMediaQuery";

function Header() {
  const router = useRouter();
  const isDesktop = useMediaQuery("md");

  const handleClick = useCallback(() => {
    router.back();
  }, []);

  return (
    <FlexRow
      component="header"
      padding={isDesktop ? "12px 40px" : "12px 20px"}
      alignItems="center"
      width="100%"
      borderBottom="1px solid #E5E8EB"
      gap={SPACINGS.sm}
    >
      <AnimationIcon />
      <Link onClick={handleClick} underline="none" variant="h6">
        Coolmovies
      </Link>
    </FlexRow>
  );
}

export default Header;
