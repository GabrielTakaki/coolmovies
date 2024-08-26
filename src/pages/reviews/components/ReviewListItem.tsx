import React from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../redux/store";
import FlexRow from "../../../components/layout/FlexRow";
import FlexColumn from "../../../components/layout/FlexColumn";
import Text from "../../../components/data-display/Text";
import { SPACINGS } from "../../../consts/design-system/global-tokens/spacings";
import Rating from "../../../components/inputs/Rating";
import Box from "../../../components/layout/Box";
import Avatar from "../../../components/data-display/Avatar";
import { selectReviewById } from "../../../redux/slices/reviewsSlice";
import Button from "../../../components/inputs/Button";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Edit from "../../../../public/edit";

function ReviewListItem({ reviewId }: { reviewId: string }) {
  const router = useRouter();
  const isDesktop = useMediaQuery("md");
  const biggerThanSm = useMediaQuery("sm");

  const userId = useAppSelector((state) => state.user.id);
  const review = useAppSelector((state) => selectReviewById(state, reviewId));

  if (!review) {
    return null;
  }

  return (
    <FlexRow
      component="section"
      gap={SPACINGS.md}
      alignItems="center"
      width="100%"
    >
      <FlexColumn component="main" gap={SPACINGS.xs} width="100%">
        <FlexRow component="div" gap={SPACINGS.xs} alignItems="center">
          <Avatar alt="profile" size="medium" />
          <Text variant="subtitle2">{review.userByUserReviewerId?.name}</Text>
        </FlexRow>
        <FlexRow
          component="section"
          justifyContent="space-between"
          alignItems={biggerThanSm ? "center" : "start"}
          width="100%"
          flexDirection={biggerThanSm ? "row" : "column"}
        >
          <FlexRow
            component="div"
            gap={SPACINGS.xs}
            width="100%"
            flexDirection={isDesktop ? "row" : "column"}
          >
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
          {userId === review.userReviewerId && (
            <Button
              label={<Edit />}
              color="primary"
              variant="text"
              size="small"
              onClick={() => router.push(`/reviews/${reviewId}`)}
            />
          )}
        </FlexRow>
        <Text variant="subtitle2">{review.body}</Text>
      </FlexColumn>
    </FlexRow>
  );
}

export default ReviewListItem;
