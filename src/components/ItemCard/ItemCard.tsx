import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHeart } from 'react-icons/ai';

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
} from './ItemCard.styled';
import { Schedule } from '../Schedule';
import { Location } from '../Location';
import { Button } from '../Button';
import { CafeTag } from '../CafeTag';
import { Cafe } from '../../types/Cafe.type';
import { CafeRating } from '../CafeRating';

import { appRoutes } from '../../routes/Routes';

type Props = {
  cafe: Cafe;
};

export const ItemCard: FC<Props> = ({ cafe }) => {
  const { name, images, average_bill, rating, reviews } = cafe;

  return (
    <ItemCardStyled>
      <ItemCardPhoto>
        <img src={images[0].url} alt={name} />
      </ItemCardPhoto>
      <ItemCardContent>
        <div>
          <ItemCardHeader>
            <ItemCardTitle>{name}</ItemCardTitle>
            <ItemCardFavorite>
              <AiOutlineHeart />
            </ItemCardFavorite>
          </ItemCardHeader>
          <ItemCardDescription>
            <Location />
            <Schedule>{average_bill} &#183; Open now (8 AM - 22 PM)</Schedule>
            <ItemCardFeaturesList>
              <CafeTag>Vegan menu</CafeTag>
              <CafeTag>Free WI-FI</CafeTag>
            </ItemCardFeaturesList>
          </ItemCardDescription>
          <ItemCardFooter>
            <CafeRating rating={rating} reviews={reviews} />
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
