import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../theme';
import { AiOutlineClose } from 'react-icons/ai';
import { FC } from 'react';
import { Input } from '../Input';
import { DatePicker } from '@mui/x-date-pickers';
import { CustomSelect } from '../Filters/CustomSelect';
// import { options } from '../Filters';
import { Button } from '../Button';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export type Props = {
  cafeName: string;
};

export const ModalBooking: FC<Props> = ({ cafeName }) => {
  return (
    <ModalContainer>
      <HeaderContainer>
        <StyledTitle>Booking a seat</StyledTitle>
        <CloseIcon />
      </HeaderContainer>
      <StyledCafeTitle>{cafeName}</StyledCafeTitle>
      <StyledWarningTitle>
        ! You can only book a seat for 1 hour.
      </StyledWarningTitle>
      <Form>
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
              <StyledDatePicker />
            </PickerContainer>
          </LeftContent>
          <RightContent>
            <Input
              type="text"
              name="guests"
              label="Enter number of guests"
              placeholder="4"
            />
            <div>
              {/* <CustomSelect
              options={options}
              label="Choose available time"
              placeholder="2:30 pm"
            /> */}
            </div>
          </RightContent>
        </FormContainer>
        <Button>Reserve</Button>
      </Form>
    </ModalContainer>
  );
};
