import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { FlexContainer } from '../FlexContainer';
import { RatingIcon, RatingAmount, RatingReviews } from './CafeRating.styled';

export const CafeRating: FC = () => {
  return (
    <FlexContainer ai="center" gap="4px">
      <RatingIcon>
        <AiFillStar />
      </RatingIcon>
      <RatingAmount>4.2</RatingAmount>
      <RatingReviews>(325 reviews)</RatingReviews>
    </FlexContainer>
  );
};
