/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AiOutlineHeart, AiOutlinePhone, AiFillStar } from 'react-icons/ai';
import { FlexContainer } from '../../components/FlexContainer';
import {
  CafeStyled,
  CafeWrapper,
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
  CafeSuggestions,
  StyledFavourite,
} from './Cafe.styled';
import { BackButton } from '../../components/BackButton';
import { Location } from '../../components/Location';
import { Schedule } from '../../components/Schedule';
import { CafeTag } from '../../components/CafeTag';
import { CafeRating } from '../../components/CafeRating';
import { Button } from '../../components/Button';
import { COLORS } from '../../theme';
import { Header } from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useGetGafeById } from '../../hooks/useGetCafeById';
import { ExploreList } from '../../components/ExploreList';
import { createFeaturesList } from '../../utils/createFeaturesList';
import { normalizeWorkingTime } from '../../utils/normalizeWorkingTime';
import { isCafeOpen } from '../../utils/isCafeOpen';
import { ModalBooking } from '../../components/ModalBooking';
import { appRoutes } from '../../routes/Routes';
import { Gallery } from '../../components/Gallery';
import { Loader } from '../../components/Loader';
import { toggleFavourite } from '../../api/toggleFavourite';

export const Cafe: FC = () => {
  const { cafeId = 0 } = useParams();
  const token = localStorage.getItem('accessToken') || '';
  const [data, status] = useGetGafeById(+cafeId, token);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const {
    name,
    street,
    reviews,
    rating,
    images,
    work_time_start,
    work_time_end,
    average_bill,
    phone_number,
    is_favourite_cafe,
    id
  } = data;
  
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const features = createFeaturesList(data);
  const normalizedStartTime = normalizeWorkingTime(String(work_time_start));
  const normalizedEndTime = normalizeWorkingTime(String(work_time_end));
  const isOpen = isCafeOpen(normalizedStartTime, normalizedEndTime);

  useEffect(() => {
    if (data) {
      setIsFav(is_favourite_cafe);
    }
  }, [data, is_favourite_cafe]);

  const handleShowModal = () => {
    if (!localStorage.getItem('accessToken')) {
      navigate(appRoutes.login);
    } else {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'visible';
  };

  const handleFavourite = async () => {
    if (token === '') {
      navigate(appRoutes.login);
    }
    await toggleFavourite(token, id);
    setIsFav(curr => !curr);
  }

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <CafeStyled>
      <CafeWrapper>
        <CafeHeader>
          <FlexContainer fd="column">
            <Header />
            <nav>
              <BackButton />
            </nav>
          </FlexContainer>
          <CafeTitleWrapper bg={images[0].url}>
            <CafeTitle>{name}</CafeTitle>
            <Favorite
              onClick={handleFavourite}
            >
              {isFav ? <StyledFavourite /> : <AiOutlineHeart />}
            </Favorite>
          </CafeTitleWrapper>
          <FlexContainer jc="space-between" ai="center">
            <FlexContainer fd="column" gap="14px">
              <Location variant="big" street={street} />
              <Schedule variant="big">
                {average_bill} &#183; {isOpen ? 'Open now' : 'Closed'} (
                {normalizedStartTime}&nbsp;-&nbsp;
                {normalizedEndTime})
              </Schedule>
              <FlexContainer gap="8px">
                {features.map((feature) => (
                  <CafeTag key={feature}>{feature}</CafeTag>
                ))}
              </FlexContainer>
            </FlexContainer>
            <FlexContainer fd="column" ai="flex-end" gap="8px">
              <CafeRating rating={rating} reviews={reviews} />
              <Button type="button" width="200px" onClick={handleShowModal}>
                Reserve
              </Button>
              {showModal && (
                <ModalBooking cafeName={name} onClose={handleCloseModal} />
              )}
            </FlexContainer>
          </FlexContainer>
        </CafeHeader>
        <CafeGallery>
          <CafeTitleSecondary>Photos</CafeTitleSecondary>
          <CafeGalleryContainer>
            {images.slice(0, 5).map((image, index) => (
              <PhotoContainer
                key={image.url}
                onClick={() => setCurrentImage(index + 1)}
              >
                <img src={image.url} alt="Cafe" />
              </PhotoContainer>
            ))}
          </CafeGalleryContainer>
        </CafeGallery>
        <CafeInfo>
          <CafeInfoItem>
            <CafeTitleTertiary>Location & Contacts</CafeTitleTertiary>
            <FlexContainer fd="column" gap="8px">
              <Location color={COLORS.black} street={street} />
              <CafePhone>
                <AiOutlinePhone />
                <CafePhoneNumber>{phone_number}</CafePhoneNumber>
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
              <FlexContainer jc="space-between" ai="flex-end" width="100%">
                <CafeInfoReviews>{reviews} reviews</CafeInfoReviews>
                <CafeInfoRating>
                  <AiFillStar />
                  <span>{rating}</span>
                </CafeInfoRating>
              </FlexContainer>
            </FlexContainer>
          </CafeInfoItem>
          <CafeInfoItem>
            <CafeTitleTertiary>General Information</CafeTitleTertiary>
            <p>General information about a place</p>
          </CafeInfoItem>
        </CafeInfo>
        <CafeSuggestions>
          <CafeTitleSecondary>You might also like</CafeTitleSecondary>
          <ExploreList />
        </CafeSuggestions>
      </CafeWrapper>
      {currentImage !== 0 && (
        <Gallery
          images={images.map((obj) => obj.url)}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
    </CafeStyled>
  );
};
