/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../theme';
import { AiOutlineClose } from 'react-icons/ai';
import { FC } from 'react';
import { Input } from '../Input';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '../Button';
import { Modal } from '../Modal/Modal';
import { BookingFormValues, OrderValues } from '../../types/BookingFormValues';
import { BookingSchema } from '../../schemas/Booking.schema';
import { useMutation } from 'react-query';
import { postOrder } from '../../api/postOrder';
import { Alert } from '@mui/material';
import { appRoutes } from '../../routes/Routes';

export const StyledTitle = styled.h3`
  font-size: ${FONT_SIZES.s24};
  font-weight: ${FONT_WEIGHTS.medium};
  line-height: 140%;
  color: ${COLORS.black};
`;

export const ModalContainer = styled.div`
  width: 644px;
  background-color: ${COLORS.white};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 32px;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const StyledCafeTitle = styled.h1`
  font-size: ${FONT_SIZES.s40};
  font-weight: ${FONT_WEIGHTS.bold};
  line-height: 120%;
  color: ${COLORS.black};
  text-align: center;
  margin-bottom: 8px;
`;

export const StyledWarningTitle = styled.h6`
  font-size: ${FONT_SIZES.s18};
  line-height: 140%;
  color: ${COLORS.red};
  text-align: center;
  margin-bottom: 24px;
`;

export const StyledLabel = styled.p`
  font-size: ${FONT_SIZES.s16};
  line-height: 140%;
  color: ${COLORS.dark_grey};
  margin-bottom: 6px;
`;

export const PickerContainer = styled.div`
  width: 100%;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;

  & .MuiOutlinedInput-input {
    padding: 12px;
    height: 26px;
    font-size: 16px;
    line-height: 140%;
  }

  & .MuiOutlinedInput-root {
    border-radius: 8px;

    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${COLORS.grey};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.grey};
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${COLORS.main};
    }
  }
`;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;

  & .MuiOutlinedInput-input {
    padding: 12px;
    height: 26px;
    font-size: 16px;
    line-height: 140%;
  }

  & .MuiOutlinedInput-root {
    border-radius: 8px;

    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${COLORS.grey};
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.grey};
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${COLORS.main};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export type Props = {
  cafeName: string;
  onClose: () => void;
};

export const ModalBooking: FC<Props> = ({ cafeName, onClose }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newOrder: OrderValues) => {
      return postOrder(newOrder);
    },
    onSuccess: () => {
      onClose();
      navigate(appRoutes.account);
    },
  });

  const { cafeId = 0 } = useParams();

  const error = mutation.error as Error;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: yupResolver(BookingSchema),
    mode: 'onBlur',
  });

  const onSubmit = (bookingData: BookingFormValues) => {
    const formattedBookingDate = format(
      new Date(bookingData.booking_date),
      'yyyy.MM.dd'
    );
    const formattedBookingTime: string = format(
      new Date(bookingData.booking_time),
      'HH'
    );

    const data = {
      cafe_id: Number(cafeId),
      places: bookingData.places,
      booking_date: `${formattedBookingDate} ${formattedBookingTime}`,
    };

    mutation.mutate(data);
  };

  return (
    <Modal>
      <ModalContainer>
        <HeaderContainer>
          <StyledTitle>Booking a seat</StyledTitle>
          <CloseButton type="button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </HeaderContainer>
        <StyledCafeTitle>{cafeName}</StyledCafeTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <LeftContent>
              <Input
                type="text"
                name="name"
                label="Enter your name"
                placeholder="Mary Brown"
              />
              <PickerContainer>
                <StyledLabel>Choose date</StyledLabel>
                <Controller
                  name="booking_date"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledDatePicker
                      {...field}
                      onChange={(value) => field.onChange(value as string)}
                    />
                  )}
                />
              </PickerContainer>
            </LeftContent>
            <RightContent>
              <Input
                type="text"
                name="places"
                label="Enter number of guests"
                placeholder="4"
                register={register('places')}
                errors={errors}
              />
              <PickerContainer>
                <StyledLabel>Choose available time</StyledLabel>
                <Controller
                  name="booking_time"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <StyledTimePicker
                      {...field}
                      views={['hours']}
                      ampm={false}
                      onChange={(value) => field.onChange(value as string)}
                    />
                  )}
                />
              </PickerContainer>
            </RightContent>
          </FormContainer>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            Reserve
          </Button>
        </Form>
        {error && <Alert severity="error">{error.message}</Alert>}
      </ModalContainer>
    </Modal>
  );
};
