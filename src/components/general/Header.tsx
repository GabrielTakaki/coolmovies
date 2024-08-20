import React from "react";
import FlexRow from "../layout/FlexRow";
import Text from "../data-display/Text";
import AnimationIcon from "@mui/icons-material/Animation";
import { SPACINGS } from "../../consts/design-system/global-tokens/spacings";

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
      <Text variant="h6">Coolmovies</Text>
    </FlexRow>
  );
}

export default Header;
