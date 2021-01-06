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
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dialog({
  visible,
  setOpenDialog,
  onAction,
}: IDialogProps) {
  const setAction = () => {
    onAction(false);
  };

  if (!visible) return null;
  return (
    <DialogBlock>
      <Wrapper>
        <div>다이얼로그</div>
        <div>뭐할껀데?</div>
        <div>
          <Button onClick={() => setOpenDialog(false)}>취소</Button>
          <Button onClick={setAction}>확인</Button>
        </div>
      </Wrapper>
    </DialogBlock>
  );
}
