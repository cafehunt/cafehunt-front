import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { FlexContainer } from '../FlexContainer';
import { RatingIcon, RatingAmount, RatingReviews } from './CafeRating.styled';

type Props = {
  rating: number;
  reviews: number;
};

export const CafeRating: FC<Props> = ({ rating, reviews }) => {
  return (
    <FlexContainer ai="center" gap="4px">
      <RatingIcon>
        <AiFillStar />
      </RatingIcon>
      <RatingAmount>{rating}</RatingAmount>
      <RatingReviews>({reviews} reviews)</RatingReviews>
    </FlexContainer>
  );
};
