import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';

import {
  ItemCardContent,
  ItemCardHeader,
  ItemCardDescription,
  ItemCardPhoto,
  ItemCardStyled,
  ItemCardTitle,
  ItemCardFavorite,
  ItemCardFeaturesList,
  ItemCardFooter,
  ItemCardRating,
  RatingIcon,
} from './ItemCard.styled';
import { Schedule } from '../Schedule';
import { Location } from '../Location';
import { Button } from '../Button';
import { CafeTag } from '../CafeTag';

import itemPhoto from '../../assets/img/item-card.jpg';
import { appRoutes } from '../../routes/Routes';

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
          <ItemCardDescription>
            <Location />
            <Schedule>$$ &#183; Open now (8 AM - 22 PM)</Schedule>
            <ItemCardFeaturesList>
              <CafeTag>Vegan menu</CafeTag>
              <CafeTag>Free WI-FI</CafeTag>
            </ItemCardFeaturesList>
          </ItemCardDescription>
          <ItemCardFooter>
            <ItemCardRating>
              <RatingIcon>
                <AiFillStar />
              </RatingIcon>
              <span>4.2</span>
            </ItemCardRating>
            <Link to={appRoutes.cafes}>
              <Button variant="secondary" width="130px">
                View
              </Button>
            </Link>
          </ItemCardFooter>
        </div>
      </ItemCardContent>
    </ItemCardStyled>
  );
};
