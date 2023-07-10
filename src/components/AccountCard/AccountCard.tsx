import { FC } from 'react';
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
import { Schedule } from '../Schedule';
import { Location } from '../Location';
import { Button } from '../Button';

import { FlexContainer } from '../FlexContainer';
import { Order } from '../../types/Order.type';
import { NewUserAPIResponse } from '../../types/User.type';

type Props = {
  data: Order;
  user: NewUserAPIResponse;
  isFavorites?: boolean;
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

export const AccountCard: FC<Props> = ({ data, user, isFavorites }) => {
  const { cafe_id, cafe_name, places, booking_date, image } = data;

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
          <Button>Cancel booking</Button>
        </BookingStyled>
      )}
    </FlexContainer>
  );
};
