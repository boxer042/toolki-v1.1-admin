import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import {
  FiBookmark,
  FiMapPin,
  FiPhone,
  FiPrinter,
  FiSmartphone,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import { zIndexes } from '../../../lib/styles/zIndexes';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import transitions from '../../../lib/styles/transitions';

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
      padding-top: 1.5rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Contents = styled.form``;

export type Tinputs = {
  name: string;
  address: string;
  office: string;
  fax: string;
  manager: string;
  position: string;
  mobile: string;
  businessNumber: string;
  ceo: string;
};

export interface IAccountModalProps {
  visible: boolean;
  onClose: () => void;
  oncreateAccount: (inputs: Tinputs) => void;
}

export default function AccountModal({
  visible,
  onClose,
  oncreateAccount,
}: IAccountModalProps) {
  const [closed, setClosed] = useState(true);
  const [inputs, setInputs] = useState({
    name: '',
    address: '',
    office: '',
    fax: '',
    manager: '',
    position: '',
    mobile: '',
    businessNumber: '',
    ceo: '',
  });

  const {
    name,
    address,
    office,
    fax,
    manager,
    position,
    mobile,
    businessNumber,
    ceo,
  } = inputs;

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

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs, // 기존의 input 객체 복사
        [name]: value, // name키를 가진값을 value로 설정
      });
    },
    [inputs],
  );

  const onSelected = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs],
  );

  // TODO: onReset 만들어야함
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
          onSubmit={(e) => {
            e.preventDefault();
            oncreateAccount(inputs);
            onClose();
          }}
        >
          <Input
            name="name"
            label="거래처명"
            placeholder="거래처명"
            value={name}
            error=""
            reactIcon={<FiUsers />}
            required
            onChange={onChange}
          />
          <Input
            name="address"
            value={address}
            label="거래처 주소"
            placeholder="주소"
            reactIcon={<FiMapPin />}
            onChange={onChange}
          />
          <Input
            name="office"
            value={office}
            label="사무실 전화번호"
            placeholder="사무실 전화번호"
            error=""
            reactIcon={<FiPhone />}
            required
            onChange={onChange}
          />
          <Input
            name="fax"
            value={fax}
            label="팩스 전화번호"
            placeholder="사무실 전화번호"
            reactIcon={<FiPrinter />}
            onChange={onChange}
          />
          <div style={{ display: 'flex' }}>
            <div style={{ flex: '1', marginRight: '0.5rem' }}>
              <Input
                name="manager"
                value={manager}
                label="담당자 이름"
                placeholder="담당자 이름"
                reactIcon={<FiUser />}
                onChange={onChange}
              />
            </div>
            <div style={{ flex: '1', marginLeft: '0.5rem' }}>
              <Select
                name="position"
                value={position}
                label="담당자 직급"
                optionLabel="담당자 직급"
                options={[
                  '대표',
                  '이사',
                  '부장',
                  '차장',
                  '과장',
                  '대리',
                  '사원',
                ]}
                onSelected={onSelected}
              />
            </div>
          </div>
          <Input
            name="mobile"
            value={mobile}
            label="담당자 연락처"
            placeholder="담당자 연락처"
            reactIcon={<FiSmartphone />}
            onChange={onChange}
          />
          <Input
            name="businessNumber"
            value={businessNumber}
            label="사업자등록번호"
            placeholder="사업자등록번호"
            reactIcon={<FiBookmark />}
            onChange={onChange}
          />
          <Input
            name="ceo"
            value={ceo}
            label="사업자 대표"
            placeholder="사업자 대표"
            reactIcon={<FiUser />}
            onChange={onChange}
          />
          <div className="footer">
            <Button color="red" size="all" type="submit">
              거래처 저장
            </Button>
          </div>
        </Contents>
      </div>
    </AccountModalBlock>
  );
}
