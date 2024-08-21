import React from "react";
import FlexRow from "../layout/FlexRow";
import AnimationIcon from "@mui/icons-material/Animation";
import { SPACINGS } from "../../consts/design-system/global-tokens/spacings";
import Link from "../navigation/Link";

function Header() {
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
      <Link href="/reviews" underline="none" variant="h6">
        Coolmovies
      </Link>
    </FlexRow>
  );
}

export default Header;
