import React, { useCallback } from "react";
import FlexRow from "../layout/FlexRow";
import AnimationIcon from "@mui/icons-material/Animation";
import { SPACINGS } from "../../consts/design-system/global-tokens/spacings";
import Link from "../navigation/Link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.back();
  }, []);

  return (
    <FlexRow
      component="header"
      padding="12px 40px"
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
