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
import { Carousel } from '../Carousel';
import { normalizeWorkingTime } from '../../utils/normalizeWorkingTime';
import { createFeaturesList } from '../../utils/createFeaturesList';
import { isCafeOpen } from '../../utils/isCafeOpen';

type Props = {
  cafe: Cafe;
};

export const ItemCard: FC<Props> = ({ cafe }) => {
  const {
    name,
    images,
    street,
    average_bill,
    work_time_start,
    work_time_end,
    rating,
    reviews,
  } = cafe;

  const features = createFeaturesList(cafe);
  const normalizedStartTime = normalizeWorkingTime(String(work_time_start));
  const normalizedEndTime = normalizeWorkingTime(String(work_time_end));

  const isOpen = isCafeOpen(normalizedStartTime, normalizedEndTime);

  return (
    <ItemCardStyled>
      <ItemCardPhoto>
        <Carousel data={images} />
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
            <Location street={String(street)} />
            <Schedule>
              {average_bill} &#183; {isOpen ? 'Open now' : 'Closed'} (
              {normalizedStartTime}&nbsp;-&nbsp;
              {normalizedEndTime})
            </Schedule>
            <ItemCardFeaturesList>
              {features.map((feature, index) => (
                <CafeTag key={index}>{feature}</CafeTag>
              ))}
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
