import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { zIndexes } from './../../lib/styles/zIndexes';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import { FaBuilding, FaFax } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import transitions from '../../lib/styles/transitions';

const AccountModalBlock = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndexes.AccountModal};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    background-color: white;
    width: 606px;
    padding: 1.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    @media screen and (max-width: 480px) {
      flex: 1;
      width: auto;
      height: 100%;
    }
    ${(props) =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    .status-bar {
      display: flex;
      justify-content: space-between;
      font-size: 2rem;
      align-items: center;
      margin-bottom: 1rem;
      svg {
        cursor: pointer;
      }
    }
    .footer {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Contents = styled.form``;

export interface IAccountModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AccountModal({ visible, onClose }: IAccountModalProps) {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [fax, setFax] = useState('');
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
    <AccountModalBlock visible={visible}>
      <div className="wrapper">
        <div className="status-bar">
          <div />
          <div>거래처 등록</div>
          <GrFormClose onClick={onClose} />
        </div>
        <Contents
          onSubmit={() => {
            alert('임시');
          }}
        >
          <Input
            label="거래처명"
            placeholder="거래처명"
            error=""
            reactIcon={<FaBuilding />}
            required
          />
          <Input
            label="거래처 주소"
            placeholder="주소"
            reactIcon={<MdLocationOn />}
          />
          <Input
            label="사무실 전화번호"
            placeholder="사무실 전화번호"
            error=""
            reactIcon={<FaBuilding />}
            required
          />
          <Input
            label="팩스 전화번호"
            placeholder="사무실 전화번호"
            reactIcon={<FaFax />}
          />
          <Input
            label="담당자 이름"
            placeholder="담당자 이름"
            reactIcon={<FaFax />}
          />
          <Input
            label="담당자 직급"
            placeholder="담당자 직급"
            reactIcon={<FaFax />}
          />
          <Select />
          <Input
            label="담당자 연락처"
            placeholder="담당자 연락처"
            reactIcon={<FaFax />}
          />

          <div className="footer">
            <Button color="red" size="all">
              거래처 저장
            </Button>
          </div>
        </Contents>
      </div>
    </AccountModalBlock>
  );
}
