/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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
import { Carousel } from '../Carousel';
import { normalizeWorkingTime } from '../../utils/normalizeWorkingTime';
import { createFeaturesList } from '../../utils/createFeaturesList';
import { isCafeOpen } from '../../utils/isCafeOpen';
import { toggleFavourite } from '../../api/toggleFavourite';
import { useQueryClient } from 'react-query';
import { FiltersType } from '../../types/Filters.type';
import { appRoutes } from '../../routes/Routes';

type Props = {
  cafe: Cafe;
  page: number;
  filters: FiltersType;
};

export const ItemCard: FC<Props> = ({ cafe, page, filters }) => {
  const {
    name,
    images,
    street,
    average_bill,
    work_time_start,
    work_time_end,
    rating,
    reviews,
    id,
    is_favourite_cafe,
  } = cafe;

  const [isFavourite, setIsFavourite] = useState(is_favourite_cafe);
  const features = createFeaturesList(cafe);
  const normalizedStartTime = normalizeWorkingTime(String(work_time_start));
  const normalizedEndTime = normalizeWorkingTime(String(work_time_end));

  const isOpen = isCafeOpen(normalizedStartTime, normalizedEndTime);
  const token = localStorage.getItem('accessToken') || '';
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleFavourite = async () => {
    if (token === '') {
      navigate(appRoutes.login);
    }
    await toggleFavourite(token, id);
    setIsFavourite((current) => !current);
    await queryClient.invalidateQueries([
      'cafes',
      page,
      filters,
      token,
    ]);
  };

  return (
    <ItemCardStyled>
      <ItemCardPhoto>
        <Carousel data={images} />
      </ItemCardPhoto>
      <ItemCardContent>
        <div>
          <ItemCardHeader>
            <Link to={`/cafes/${id}`}>
              <ItemCardTitle>{name}</ItemCardTitle>
            </Link>
            <ItemCardFavorite
              onClick={handleFavourite}
              isFavourite={isFavourite}
            >
              {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
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
            <Link to={`/cafes/${id}`}>
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
