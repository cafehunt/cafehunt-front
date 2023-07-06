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

import itemPhoto from '../../assets/img/item-card.jpg';
import { appRoutes } from '../../routes/Routes';
import { FlexContainer } from '../FlexContainer';

type Props = {
  isFavorites?: boolean;
};

export const AccountCard: FC<Props> = ({ isFavorites }) => {
  return (
    <FlexContainer gap="48px">
      <ItemCardStyled>
        <ItemCardPhoto>
          <img src={itemPhoto} alt="Very well cafe" />
        </ItemCardPhoto>
        <ItemCardContent>
          <div>
            <ItemCardHeader>
              <ItemCardTitle>Very Well Cafe</ItemCardTitle>
              {!isFavorites || (
                <ItemCardFavorite>
                  <RedHeartIcon />
                </ItemCardFavorite>
              )}
            </ItemCardHeader>
            <ItemCardDescription>
              {/* <Location /> */}
              <Schedule>$$ &#183; Open now (8 AM - 22 PM)</Schedule>
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
      {!isFavorites && (
        <BookingStyled>
          <ItemCardTitle>Booking for 4 people</ItemCardTitle>
          <SubtitleWrapper>
            <StyledSubtitle>Mary Brown</StyledSubtitle>
            <StyledSubtitle>22/06/2023 5:00pm - 6:00pm</StyledSubtitle>
          </SubtitleWrapper>
          <Button>Cancel booking</Button>
        </BookingStyled>
      )}
    </FlexContainer>
  );
};
