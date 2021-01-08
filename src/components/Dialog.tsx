import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { zindex } from './../foundations/zindex';
import { RiCloseFill } from 'react-icons/ri';
import { base } from './../foundations/base';
import transitions from './../lib/styles/transitions';
import Button from './button/Button';

const DialogBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zindex.dialog};
  background-color: rgba(249, 249, 249, 0.85);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  min-width: 240px;
  max-height: 360px;
  position: absolute;
`;
const Header = styled.div`
  font-size: 1.25rem;
  padding: 9px 24px 9px;
  font-weight: 600;
`;
const Content = styled.div`
  padding: 20px 24px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
`;

export interface IDialogProps {
  visible: boolean;
  onClick?: () => void;
  onClose?: () => void;
  title?: string;
  disabled?: boolean;
  mode?: 'add' | 'delate';
}

export default function Dialog({
  visible,
  title,
  onClose,
  onClick,
  disabled,
  mode = 'add',
}: IDialogProps) {
  if (!visible) return null;
  return (
    <DialogBlock>
      <Wrapper>
        <Header>알림</Header>
        <Content>
          {title}를 {mode === 'add' ? '추가' : '삭제'}하시겠습니까 ?
        </Content>
        <Footer>
          <Button color="white" onClick={onClose}>
            취소
          </Button>
          <Button color="white" disabled={disabled} onClick={onClick}>
            확인
          </Button>
        </Footer>
      </Wrapper>
    </DialogBlock>
  );
}

//cancelText confirmText
