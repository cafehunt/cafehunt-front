import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import {
  ItemCardContent,
  ItemCardHeader,
  ItemCardDescription,
  ItemCardPhoto,
  ItemCardStyled,
  ItemCardTitle,
  ItemCardFavorite,
  ItemCardFooter,
  ItemCardRating,
  RatingIcon,
  BookingStyled,
  StyledSubtitle,
  SubtitleWrapper,
  RedHeartIcon,
} from './AccountCard.styled';
import Alert from '@mui/material/Alert';
import { Schedule } from '../Schedule';
import { Location } from '../Location';
import { Button } from '../Button';

import { FlexContainer } from '../FlexContainer';
import { Order } from '../../types/Order.type';
import { NewUserAPIResponse } from '../../types/User.type';

import { FavouriteCafe } from '../../types/FavouriteCafe';

import { removeOrder } from '../../api/removeOrder';
import { isDateGone } from '../../utils/isDateGone';


type Props = {
  data?: Order;
  user?: NewUserAPIResponse;
  isFavorites?: boolean;
  favouriteCafe?: FavouriteCafe;
};

function formatDate(inputDate: string) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export const AccountCard: FC<Props> = ({ data, user, isFavorites, favouriteCafe }) => {
    if (!data || !user) {
    return (
      <FlexContainer gap="48px">
        <ItemCardStyled>
          <ItemCardPhoto>
            <img src={favouriteCafe?.image} alt={favouriteCafe?.name} />
          </ItemCardPhoto>
          <ItemCardContent>
            <div>
              <ItemCardHeader>
                  <ItemCardTitle>{favouriteCafe?.name}</ItemCardTitle>
                {!isFavorites || (
                  <ItemCardFavorite>
                    <RedHeartIcon />
                  </ItemCardFavorite>
                )}
              </ItemCardHeader>
              <ItemCardDescription>
                <Location street="Zankovetska St., 15/4, Kyiv, Ukraine" />
                <Schedule>$$ &#183; Open now (8 AM - 22 PM)</Schedule>
              </ItemCardDescription>
              <ItemCardFooter>
                <ItemCardRating>
                  <RatingIcon>
                    <AiFillStar />
                  </RatingIcon>
                  <span>4.2</span>
                </ItemCardRating>
              </ItemCardFooter>
            </div>
          </ItemCardContent>
        </ItemCardStyled>
      </FlexContainer>
    );
  }
  
  const { cafe_id, cafe_name, places, booking_date, image, id } = data;
  const queryClient = useQueryClient();
  const token = localStorage.getItem('accessToken');

  const isBookingCompleted = isDateGone(booking_date);

  const mutation = useMutation(
    (mutationKey: readonly [string, number]) => {
      const [token, orderId] = mutationKey;
      return removeOrder(token, orderId);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['orders', token]);
      },
    }
  );

  const handleRemove = () => {
    const token = localStorage.getItem('accessToken') || '';
    mutation.mutate([token, id]);
  };

  return (
    <FlexContainer gap="48px">
      <ItemCardStyled>
        <ItemCardPhoto>
          <img src={image} alt={cafe_name} />
        </ItemCardPhoto>
        <ItemCardContent>
          <div>
            <ItemCardHeader>
              <Link to={`/cafes/${cafe_id}`}>
                <ItemCardTitle>{cafe_name}</ItemCardTitle>
              </Link>
              {!isFavorites || (
                <ItemCardFavorite>
                  <RedHeartIcon />
                </ItemCardFavorite>
              )}
            </ItemCardHeader>
            <ItemCardDescription>
              <Location street="Zankovetska St., 15/4, Kyiv, Ukraine" />
              <Schedule>$$ &#183; Open now (8 AM - 22 PM)</Schedule>
            </ItemCardDescription>
            <ItemCardFooter>
              <ItemCardRating>
                <RatingIcon>
                  <AiFillStar />
                </RatingIcon>
                <span>4.2</span>
              </ItemCardRating>
              <Link to={`/cafes/${cafe_id}`}>
                <Button variant="secondary" width="130px">
                  View
                </Button>
              </Link>
            </ItemCardFooter>
          </div>
        </ItemCardContent>
      </ItemCardStyled>
      {!isFavorites && (
        <BookingStyled>
          <ItemCardTitle>Booking for {places} people</ItemCardTitle>
          <SubtitleWrapper>
            <StyledSubtitle>
              {user.first_name} {user.last_name}
            </StyledSubtitle>
            <StyledSubtitle>{formatDate(booking_date)}</StyledSubtitle>
          </SubtitleWrapper>
          {!isBookingCompleted ? (
            <Button
              disabled={isBookingCompleted}
              type="button"
              onClick={handleRemove}
            >
              Cancel booking
            </Button>
          ) : (
            <Alert sx={{ borderRadius: '16px' }} severity="success">
              Completed
            </Alert>
          )}
        </BookingStyled>
      )}
    </FlexContainer>
  );
};
