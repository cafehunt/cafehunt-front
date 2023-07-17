import styled from 'styled-components';
import { COLORS, FONT_SIZES, FONT_WEIGHTS, MEDIA } from '../../theme';

export const AccountStyled = styled.section`
  background-color: ${COLORS.white};
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1320px;
  margin: 0 auto;
  padding-bottom: 40px;

  background-color: ${COLORS.white};

  @media (min-width: ${MEDIA.tablets}) {
    padding-bottom: 40px;
  }
`;

export const AccountInput = styled.p`
  flex: 1;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: transparent;
  border: none;
`;

export const AccountPagination = styled.div`
  display: inline-flex;
  justify-content: center;
`;

export type TitleProps = {
  fs?: string;
  fw?: string;
  lnh?: string;
  mb?: string;
};

export const StyledTitle = styled.h3<TitleProps>`
  font-size: ${({ fs }) => fs || `${FONT_SIZES.s24}`};
  font-weight: ${({ fw }) => fw || `${FONT_WEIGHTS.medium}`};
  line-height: ${({ lnh }) => lnh || '140%'};
  color: ${COLORS.black};
  margin-bottom: ${({ mb }) => mb || '0px'};
`;

export const StyledProfile = styled.div`
  padding: 16px;
  border: 1px solid ${COLORS.grey};
  border-radius: 24px;
  margin-bottom: 20px;
`;

export const AvatarCircle = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: ${COLORS.light_grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const PencilImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const MoreImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const DeleteImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const LogoutImage = styled.img`
  width: 16px;
  height: 16px;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  background-color: ${COLORS.white};
  padding: 12px 0;
  z-index: 1;
`;

export const Option = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: ${FONT_SIZES.s16};
  padding: 4px;
  line-height: 140%;
  cursor: pointer;

  &:hover {
    color: ${COLORS.red};
  }
`;

export const Tab = styled.div<{
  active: boolean;
  leftRadius?: boolean;
  rightRadius?: boolean;
}>`
  width: 100%;
  padding: 12px;
  font-size: ${FONT_SIZES.s18};
  font-weight: ${FONT_WEIGHTS.medium};
  color: ${({ active }) =>
    active ? `${COLORS.white}` : `${COLORS.dark_grey}`};
  background-color: ${({ active }) =>
    active ? `${COLORS.main}` : `${COLORS.light_grey}`};
  border-radius: ${({ leftRadius, rightRadius }) =>
    leftRadius ? '8px 0 0 8px' : rightRadius ? '0 8px 8px 0' : '0'};
  line-height: 140%;
  text-align: center;
  cursor: pointer;
`;

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const BookingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;
`;
