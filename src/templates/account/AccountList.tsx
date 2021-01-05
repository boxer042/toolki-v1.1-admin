import React, { useState } from 'react';
import styled from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import { replacePhone } from './../../lib/utils';
import { palette } from './../../foundations/palette';
import { base } from './../../foundations/base';
import Modal from '../../components/Modal';
import { useDispatch } from 'react-redux';
import { closeLayer, openLayer } from '../../modules/baseSlice';

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
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const dispatch = useDispatch();
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
                dispatch(openLayer());
                setOpenUpdateModal(true);
              }}
            >
              <td>{account.name}</td>
              <td>{replacePhone(account.contact.office)}</td>
              <td>{replacePhone(account.contact.fax)}</td>
              <td>{account.detail.address}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>1페이지</tfoot>
      </table>
      <Modal
        visible={openUpdateModal}
        title={'거래처 업데이트'}
        onClose={() => {
          dispatch(closeLayer());
          setOpenUpdateModal(false);
        }}
      >
        Update Account
      </Modal>
    </AccountListBlock>
  );
}
