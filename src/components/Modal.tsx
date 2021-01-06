import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { zindex } from './../foundations/zindex';
import { RiCloseFill } from 'react-icons/ri';
import { base } from './../foundations/base';
import transitions from './../lib/styles/transitions';
import Button from './Button';

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

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  width: 606px;
  @media (max-width: 743px) {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${base.gray_Line};
  height: 56px;
  padding: 0 1rem;
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  display: flex;
`;

const Content = styled.div`
  padding: 0 1rem;
`;

export interface IModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  visible: boolean;
  onAction?: () => void;
  disabled?: boolean;
}

const Footer = styled.div`
  margin-top: 1rem;
  border-top: 1px solid ${base.gray_Line};
  padding: 1rem;
  height: 56px;
`;
const Space = styled.div``;

export default function Modal({
  onClose,
  children,
  title,
  visible,
  onAction,
  disabled,
}: IModalProps) {
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
      <Wrapper>
        <Header>
          <CloseButton onClick={onClose}>
            <RiCloseFill />
          </CloseButton>
          <Title>{title}</Title>
          <Space />
        </Header>
        <Content>{children}</Content>
        <Footer>
          <Button onClick={onAction} disabled={disabled}>
            {title}
          </Button>
        </Footer>
      </Wrapper>
    </ModalBlock>
  );
}

//TODO content overflow (스크롤) 만들기
