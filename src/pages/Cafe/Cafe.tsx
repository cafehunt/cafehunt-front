import { FC } from 'react';

import { AiOutlineHeart, AiOutlinePhone, AiFillStar } from 'react-icons/ai';

import { FlexContainer } from '../../components/FlexContainer';
import {
  CafeStyled,
  CafeHeader,
  CafeTitleWrapper,
  CafeTitle,
  Favorite,
  CafeGallery,
  CafeTitleSecondary,
  PhotoContainer,
  CafeGalleryContainer,
  CafeInfo,
  CafeInfoItem,
  CafeTitleTertiary,
  CafePhone,
  CafePhoneNumber,
  CafeInfoLink,
  CafeInfoReviews,
  CafeInfoRating,
} from './Cafe.styled';
import { BackButton } from '../../components/BackButton';
import { Location } from '../../components/Location';
import { Schedule } from '../../components/Schedule';
import { CafeTag } from '../../components/CafeTag';
import { CafeRating } from '../../components/CafeRating';
import { Button } from '../../components/Button';

import photoImg from '../../assets/img/item-card.jpg';
import { COLORS } from '../../theme';

export const Cafe: FC = () => {
  return (
    <CafeStyled>
      <CafeHeader>
        <nav>
          <BackButton />
        </nav>
        <CafeTitleWrapper>
          <CafeTitle>Very Well Cafe</CafeTitle>
          <Favorite>
            <AiOutlineHeart />
          </Favorite>
        </CafeTitleWrapper>
        <FlexContainer jc="space-between" ai="center">
          <FlexContainer fd="column" gap="8px">
            <Location variant="big" />
            <Schedule variant="big">$$ &#183; Open now (8 AM - 22 PM)</Schedule>
            <FlexContainer gap="8px">
              <CafeTag>Vegan menu</CafeTag>
              <CafeTag>Free WI-FI</CafeTag>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer fd="column" ai="flex-end" gap="8px">
            <CafeRating />
            <Button width="200px">Book</Button>
          </FlexContainer>
        </FlexContainer>
      </CafeHeader>
      <CafeGallery>
        <CafeTitleSecondary>Photos</CafeTitleSecondary>
        <CafeGalleryContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
          <PhotoContainer>
            <img src={photoImg} alt="Cafe" />
          </PhotoContainer>
        </CafeGalleryContainer>
      </CafeGallery>
      <CafeInfo>
        <CafeInfoItem>
          <CafeTitleTertiary>Location & Contacts</CafeTitleTertiary>
          <FlexContainer fd="column" gap="8px">
            <Location color={COLORS.black} />
            <CafePhone>
              <AiOutlinePhone />
              <CafePhoneNumber>+38 (050) 123 45 67</CafePhoneNumber>
            </CafePhone>
          </FlexContainer>
          <FlexContainer gap="8px">
            <CafeInfoLink>Website</CafeInfoLink>
            <CafeInfoLink>Menu</CafeInfoLink>
          </FlexContainer>
        </CafeInfoItem>
        <CafeInfoItem>
          <FlexContainer fd="column" jc="space-between" height="100%">
            <CafeTitleTertiary>Rating & Reviews</CafeTitleTertiary>
            <FlexContainer jc="space-between" ai="center" width="100%">
              <CafeInfoReviews>372 reviews</CafeInfoReviews>
              <CafeInfoRating>
                <AiFillStar />
                <span>4.2</span>
              </CafeInfoRating>
            </FlexContainer>
          </FlexContainer>
        </CafeInfoItem>
        <CafeInfoItem>
          <CafeTitleTertiary>General Information</CafeTitleTertiary>
          <p>General information about a place</p>
        </CafeInfoItem>
      </CafeInfo>
    </CafeStyled>
  );
};
