import React from "react";
import { useAppSelector } from "../../../redux/store";
import { getReviewById } from "../../../redux/slices/entities/slice";
import FlexRow from "../../../components/layout/FlexRow";
import FlexColumn from "../../../components/layout/FlexColumn";
import Text from "../../../components/data-display/Text";
import { SPACINGS } from "../../../consts/design-system/global-tokens/spacings";
import Rating from "../../../components/inputs/Rating";
import Box from "../../../components/layout/Box";
import Avatar from "../../../components/data-display/Avatar";

function ReviewListItem({ reviewId }: { reviewId: string }) {
  const review = useAppSelector((state) => getReviewById(state, reviewId));

  console.log(review);
  if (!review) {
    return null;
  }
  return (
    <FlexRow component="li" gap={SPACINGS.md} alignItems="center">
      <FlexColumn component="main" gap={SPACINGS.xs}>
        <FlexRow component="div" gap={SPACINGS.xs} alignItems="center">
          <Avatar alt="profile" size="medium" />
          <Text variant="subtitle2">{review.userByUserReviewerId.name}</Text>
        </FlexRow>
        <FlexRow component="div" gap={SPACINGS.xs}>
          <Box marginTop="1.5px" component="div">
            <Rating
              value={review.rating}
              readOnly
              precision={0.5}
              size="small"
            />
          </Box>
          <Text weight="medium" variant="subtitle2">
            {review.title}
          </Text>
        </FlexRow>
        <Text variant="subtitle2">{review.body}</Text>
      </FlexColumn>
    </FlexRow>
  );
}

export default ReviewListItem;
