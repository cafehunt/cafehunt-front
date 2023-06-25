import { FC } from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import {
  ItemCardSmallStyled,
  ItemFavorite,
  ItemInfo,
  ItemPhoto,
  ItemRating,
  ItemTitle,
  ItemTitleWrapper,
  RatingIcon,
} from './ItemCardSmall.styled';
import { Schedule } from '../Schedule';

import { Location } from '../Location';

import itemPhoto from '../../assets/img/item-card.jpg';

export const ItemCardSmall: FC = () => {
  return (
    <ItemCardSmallStyled>
      <ItemPhoto>
        <img src={itemPhoto} alt="The Cake" />
        <ItemFavorite>
          <AiOutlineHeart />
        </ItemFavorite>
      </ItemPhoto>
      <ItemInfo>
        <ItemTitleWrapper>
          <ItemTitle>The Cake</ItemTitle>
          <ItemRating>
            <RatingIcon>
              <AiFillStar />
            </RatingIcon>
            <span>4.2</span>
          </ItemRating>
        </ItemTitleWrapper>
        <Location variant="small" />
        <Schedule variant="small">$$ &#183; Open now (8 AM - 22 PM)</Schedule>
      </ItemInfo>
    </ItemCardSmallStyled>
  );
};
