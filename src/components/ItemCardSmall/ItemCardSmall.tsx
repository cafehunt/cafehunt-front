import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  ItemCardSmallStyled,
  ItemInfo,
  ItemPhoto,
  ItemRating,
  ItemTitle,
  RatingIcon,
  RatingNumber,
} from './ItemCardSmall.styled';

import itemPhoto from '../../assets/img/item-small.jpg';

export const ItemCardSmall: FC = () => {
  return (
    <ItemCardSmallStyled>
      <ItemPhoto>
        <img src={itemPhoto} alt="The Cake" />
      </ItemPhoto>
      <ItemInfo>
        <ItemTitle>The Cake</ItemTitle>
        <ItemRating>
          <RatingIcon>
            <AiFillStar />
          </RatingIcon>
          <RatingNumber>4.2</RatingNumber>
        </ItemRating>
      </ItemInfo>
    </ItemCardSmallStyled>
  );
};
