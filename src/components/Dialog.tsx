import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { zindex } from './../foundations/zindex';
import { RiCloseFill } from 'react-icons/ri';
import { base } from './../foundations/base';
import transitions from './../lib/styles/transitions';
import Button from './Button';

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
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  width: 300px;
`;

export interface IDialogProps {
  visible: boolean;
  onAction?: () => void;
  onClose?: () => void;
  title?: string;
  disabled?: boolean;
}

export default function Dialog({
  visible,
  title,
  onClose,
  onAction,
  disabled,
}: IDialogProps) {
  if (!visible) return null;
  return (
    <DialogBlock>
      <Wrapper>
        <div>{title}</div>
        <div>뭐할껀데?</div>
        <div>
          <Button disabled={disabled} onClick={onClose}>
            취소
          </Button>
          <Button onClick={onAction}>확인</Button>
        </div>
      </Wrapper>
    </DialogBlock>
  );
}

//cancelText confirmText
