import styled from 'styled-components';
import { COLORS } from '../../../theme';

import selectArrow from '../../../assets/icons/select-arrow.svg';

export const Select2Styled = styled.div`
  margin-bottom: 26px;
`;

export const Select2Label = styled.p`
  margin-bottom: 8px;

  color: ${COLORS.dark_grey};
`;

export const Select2Wrapper = styled.select`
  position: relative;

  width: 100%;
  padding: 12px 46px 12px 12px;

  color: ${COLORS.black};

  border: 1px solid ${COLORS.grey};
  border-radius: 8px;
  outline: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: url(${selectArrow}) no-repeat;
  background-position: right 10px center;
  background-size: 24px;
`;

export const Select2Container = styled.div`
  /* position: relative; */
`;

export const Select2Option = styled.option`
  &:hover {
    background-color: ${COLORS.main};
  }
`;
