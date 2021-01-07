import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { zindex } from './../foundations/zindex';
import { RiCloseFill } from 'react-icons/ri';
import { base } from './../foundations/base';
import transitions from './../lib/styles/transitions';
import Button, { TSizeType } from './button/Button';
import { TColorType } from './button/Button';

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
  position: relative;
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
  justify-content: center;
  border-bottom: 1px solid ${base.gray_Line};
  height: 56px;
  padding: 0 1rem;
`;

const CloseButton = styled.div`
  font-size: 1.5rem;
  display: flex;
  position: absolute;
  top: 1rem;
  left: 1rem;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 0 1rem;
  overflow-y: auto;
`;

const Footer = styled.div`
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${base.gray_Line};
  padding-top: 1rem;
`;

type TModalButtonType = {
  label: string;
  color: TColorType;
  size?: TSizeType;
  onClick: () => void;
  fullWidths?: boolean;
  disabled?: boolean;
};

export interface IModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  visible: boolean;
  buttons?: TModalButtonType[];
}

export default function Modal({
  onClose,
  children,
  title,
  visible,
  buttons,
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
        <CloseButton onClick={onClose}>
          <RiCloseFill />
        </CloseButton>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Content>{children}</Content>
        <Footer>
          <ButtonWrapper>
            {buttons &&
              buttons.map((button: TModalButtonType, index: number) => (
                <Button
                  key={index}
                  color={button.color}
                  size={button.size}
                  onClick={button.onClick}
                  disabled={button.disabled}
                  fullWidths={button.fullWidths}
                >
                  {button.label}
                </Button>
              ))}
            {/* <Button onClick={onAction} disabled={disabled}>
              {title}
            </Button> */}
          </ButtonWrapper>
        </Footer>
      </Wrapper>
    </ModalBlock>
  );
}

//TODO content overflow (스크롤) 만들기
