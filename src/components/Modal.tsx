import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import { zindex } from './../foundations/zindex';
import { RiCloseFill } from 'react-icons/ri';
import { base } from './../foundations/base';
import transitions from './../lib/styles/transitions';

const ModalBlock = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zindex.modal};

  ${(props) =>
    props.visible
      ? css`
          animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;

const ModalWrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  padding: 0 1rem 1rem 1rem;
  width: 606px;
  @media (max-width: 743px) {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${base.gray_Line};
  height: 65px;
`;
const CloseButton = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Title = styled.h2``;
export interface IModalProps {
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  visible: boolean;
}

export default function Modal({ onClose, children, title, visible }: IModalProps) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId: number | null = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = window.setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;
  return (
    <ModalBlock visible={visible}>
      <ModalWrapper>
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <RiCloseFill />
          </CloseButton>
          <Title>{title}</Title>
          <div />
        </ModalHeader>
        <div>{children}</div>
      </ModalWrapper>
    </ModalBlock>
  );
}
