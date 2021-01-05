import React, { useState } from 'react';
import styled from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import { replacePhone } from './../../lib/utils';
import { palette } from './../../foundations/palette';
import { base } from './../../foundations/base';
import Modal from '../../components/Modal';
import useModalWithData from './../../components/hooks/useModalWithData';

const AccountListBlock = styled.div`
  padding: 1rem;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  thead {
    text-align: left;
    border-bottom: 1px solid ${base.gray_Line};
    color: ${base.gray_SubTitle};
  }
  th {
    padding: 0.5rem 1rem;
    background-color: ${palette.gray0};
  }
  td {
    color: ${base.gray_Title};
    padding: 1rem;
    border-bottom: 1px solid ${base.gray_Line};
  }
`;

export interface IAccountListProps {
  accounts: IAccount[];
}

export default function AccountList({ accounts }: IAccountListProps) {
  const [visible, selected, setSelected, onOpen, onClose] = useModalWithData(
    false,
    null,
  );

  console.log(selected);
  return (
    <AccountListBlock>
      <table>
        <thead>
          <tr>
            <th>거래처명</th>
            <th>사무실</th>
            <th>팩스</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr
              key={account._id}
              onClick={() => {
                setSelected(account);
                onOpen();
              }}
            >
              <td>{account.name}</td>
              <td>{replacePhone(account.contact.office)}</td>
              <td>{replacePhone(account.contact.fax)}</td>
              <td>{account.detail.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal visible={visible} onClose={onClose}>
        <div>{selected && selected.name}</div>
      </Modal>
    </AccountListBlock>
  );
}
