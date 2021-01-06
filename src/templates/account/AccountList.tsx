import React, { useState } from 'react';
import styled from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import { replacePhone } from './../../lib/utils';
import { palette } from './../../foundations/palette';
import { base } from './../../foundations/base';
import Modal from '../../components/Modal';
import useModalWithData from './../../components/hooks/useModalWithData';
import { FiTrash2 } from 'react-icons/fi';
import Button from '../../components/Button';
import { FaRegFrown } from 'react-icons/fa';

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
    padding: 1rem;
    /* background-color: ${palette.gray0}; */
  }
  td {
    color: ${base.gray_Title};
    padding: 1rem;
    border-bottom: 1px solid ${base.gray_Line};
  }
  .column_name {
    width: 10%;
  }
  .column_office {
  }
  .column_fax {
  }
  .column_address {
    width: 30%;
  }
  @media (max-width: 743px) {
    table {
      white-space: nowrap;
    }
    .column_address,
    .data_address {
      display: none;
    }
  }
`;

const NoDataContainer = styled.tr`
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  td {
    padding: 2rem 0;
  }
  svg {
    font-size: 5rem;
  }
`;

export interface IAccountListProps {
  accounts: IAccount[];
  error?: string;
}

export default function AccountList({ accounts, error }: IAccountListProps) {
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
            <th className="column_name">거래처명</th>
            <th className="column_office">사무실</th>
            <th className="column_fax">팩스</th>
            <th className="column_address">주소</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {accounts.length === 0 ? (
            <NoDataContainer>
              <td colSpan={5}>
                <div>
                  <FaRegFrown />
                </div>
                {error !== null ? <div>{error}</div> : <div>No data</div>}
              </td>
            </NoDataContainer>
          ) : (
            accounts.map((account) => (
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
                <td className="data_address">{account.detail.address}</td>
                <td>
                  <Button size="small" shape="round">
                    <FiTrash2 />
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Modal visible={visible} onClose={onClose}>
        <div>{selected && selected.name}</div>
      </Modal>
    </AccountListBlock>
  );
}
