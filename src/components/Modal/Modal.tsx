import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled } from './Modal.styled';

export const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  const modalRoot = document.getElementById('modal');

  if (!modalRoot) {
    throw new Error('Unable to find modal element.');
  }

  return createPortal(<ModalStyled>{children}</ModalStyled>, modalRoot);
};
