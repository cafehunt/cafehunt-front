/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import {
  ItemCardSmallStyled,
  ItemFavorite,
  ItemInfo,
  ItemPhoto,
  ItemRating,
  ItemTitle,
  ItemTitleWrapper,
  RatingIcon,
  StyledFavourite,
} from './ItemCardSmall.styled';
import { Schedule } from '../Schedule';
import { Location } from '../Location';
import { Cafe } from '../../types/Cafe.type';
import { normalizeWorkingTime } from '../../utils/normalizeWorkingTime';
import { isCafeOpen } from '../../utils/isCafeOpen';
import { toggleFavourite } from '../../api/toggleFavourite';
import { appRoutes } from '../../routes/Routes';

type Props = {
  cafe: Cafe;
};

export const ItemCardSmall: FC<Props> = ({ cafe }) => {
  const {
    id,
    name,
    images,
    street,
    average_bill,
    work_time_start,
    work_time_end,
    rating,
    is_favourite_cafe,
  } = cafe;

  const [isFav, setIsFav] = useState(is_favourite_cafe);
  const normalizedStartTime = normalizeWorkingTime(String(work_time_start));
  const normalizedEndTime = normalizeWorkingTime(String(work_time_end));

  const isOpen = isCafeOpen(normalizedStartTime, normalizedEndTime);
  const token = localStorage.getItem('accessToken') || '';
  const navigate = useNavigate();

  const handleFavourite = async () => {
    if (token === '') {
      navigate(appRoutes.login);
    }
    await toggleFavourite(token, id);
    setIsFav(curr => !curr);
  }

  return (
    <ItemCardSmallStyled>
      <ItemPhoto>
        <img src={images[0].url} alt="The Cake" />
        <ItemFavorite
          onClick={handleFavourite}
        >
          {isFav? <StyledFavourite /> : <AiOutlineHeart />}
        </ItemFavorite>
      </ItemPhoto>
      <ItemInfo>
        <ItemTitleWrapper>
          <Link to={`/cafes/${id}`}>
            <ItemTitle title={name}>{name}</ItemTitle>
          </Link>
          <ItemRating>
            <RatingIcon>
              <AiFillStar />
            </RatingIcon>
            <span>{rating}</span>
          </ItemRating>
        </ItemTitleWrapper>
        <Location variant="small" street={street} />
        <Schedule variant="small">
          {average_bill} &#183; {isOpen ? 'Open now' : 'Closed'} (
          {normalizedStartTime}&nbsp;-&nbsp;
          {normalizedEndTime})
        </Schedule>
      </ItemInfo>
    </ItemCardSmallStyled>
  );
};
