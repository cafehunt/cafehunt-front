import { FC } from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

import {
  ItemCardContent,
  ItemCardHeader,
  ItemCardLocation,
  ItemCardPhoto,
  ItemCardStyled,
  ItemCardTitle,
  ItemCardFavorite,
  ItemCardSchedule,
  ItemCardFeaturesList,
  ItemCardFeatureItem,
  ItemCardFooter,
  ItemCardRating,
  RatingIcon,
} from './ItemCard.styled';

import itemPhoto from '../../assets/img/item-card.jpg';
import { Button } from '../Button';

export const ItemCard: FC = () => {
  return (
    <ItemCardStyled>
      <ItemCardPhoto>
        <img src={itemPhoto} alt="Very well cafe" />
      </ItemCardPhoto>
      <ItemCardContent>
        <div>
          <ItemCardHeader>
            <ItemCardTitle>Very Well Cafe</ItemCardTitle>
            <ItemCardFavorite>
              <AiOutlineHeart />
            </ItemCardFavorite>
          </ItemCardHeader>
          <ItemCardLocation href="#">
            <SlLocationPin />
            <span>Velyka Vasylkivska str., Kyiv, Ukraine</span>
          </ItemCardLocation>
          <ItemCardSchedule>$$ &#183; Open now (8 AM - 22 PM)</ItemCardSchedule>
          <ItemCardFeaturesList>
            <ItemCardFeatureItem>Vegan menu</ItemCardFeatureItem>
            <ItemCardFeatureItem>Free WI-FI</ItemCardFeatureItem>
          </ItemCardFeaturesList>
          <ItemCardFooter>
            <ItemCardRating>
              <RatingIcon>
                <AiFillStar />
              </RatingIcon>
              <span>4.2</span>
            </ItemCardRating>
            <Button variant="secondary" width="130px">
              View
            </Button>
          </ItemCardFooter>
        </div>
      </ItemCardContent>
    </ItemCardStyled>
  );
};
