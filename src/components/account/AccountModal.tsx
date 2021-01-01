import React, { useState } from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { zIndexes } from './../../lib/styles/zIndexes';
import Button from '../common/Button';
import { IAccount } from '../../modules/accountsSlice';

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
    height: 420px;
    padding: 1.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    @media screen and (max-width: 480px) {
      flex: 1;
      width: auto;
      height: 100%;
    }
    .status-bar {
      display: flex;
      justify-content: flex-end;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .footer {
      margin-top: 1rem;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  .contact_manager_group {
    display: flex;
    .contact {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .manager {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;

export interface IAccountModalProps {
  visible: boolean;
}

export default function AccountModal({ visible }: IAccountModalProps) {
  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [fax, setFax] = useState('');

  console.log(name);
  return (
    <AccountModalBlock visible={visible}>
      <div className="wrapper">
        <div className="status-bar">
          <GrFormClose />
        </div>
        <div className="header">
          <h2>거래처 등록</h2>
        </div>
        <Contents>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="거래처명"
          />
          <div className="contact_manager_group">
            <div className="contact">
              <h3>연락처</h3>
              <input
                value={office}
                onChange={(e) => setOffice(e.target.value)}
                placeholder="사무실"
              />
              <input
                value={fax}
                onChange={(e) => setFax(e.target.value)}
                placeholder="팩스"
              />
            </div>
            <div className="manager">
              <h3>담당자</h3>
            </div>
          </div>

          <div>
            <h3>사업자정보</h3>
          </div>
        </Contents>
        <div className="footer">
          <Button color="gray">닫기</Button>
          <Button color="red">거래처 저장</Button>
        </div>
      </div>
    </AccountModalBlock>
  );
}
