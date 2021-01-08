import React, { useState } from 'react';
import styled from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import { replacePhone } from '../../lib/utils';
import { palette } from '../../foundations/palette';
import { base } from '../../foundations/base';
import Modal from '../../components/Modal';
import useModalWithData from '../../components/hooks/useModalWithData';
import { FiAlertCircle, FiEdit, FiStar, FiTrash2 } from 'react-icons/fi';
import Button from '../../components/button/Button';
import { FaRegFrown } from 'react-icons/fa';
import RoundButton from '../../components/button/RoundButton';
import useDialog from './../../components/hooks/useDialog';
import Dialog from '../../components/Dialog';

const ListAccountBlock = styled.div`
  padding: 0 1rem;
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
    padding: 0.5rem;
    /* background-color: ${palette.gray0}; */
    background-color: #edf2ff;
  }
  td {
    color: ${base.gray_Title};
    padding: 0.5rem;
    border-bottom: 1px solid ${base.gray_Line};
  }
  .column_star {
    width: 56px;
  }
  .column_name {
    width: 200px;
  }
  .column_office {
  }
  .column_fax {
  }
  .column_address {
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

export interface IListAccountProps {
  accounts: IAccount[];
  error?: string;
  onDeleteAccount: (id: string, name: string) => void;
  toogleFavoritesAccount: (_id: string, favorites: boolean) => void;
}

export default function ListAccount({
  accounts,
  error,
  onDeleteAccount,
  toogleFavoritesAccount,
}: IListAccountProps) {
  const [visible, selected, setSelected, onOpen, onClose] = useModalWithData(
    false,
    null,
  );
  const [deleteDialog, openDeleteDialog, closeDeleteDialog] = useDialog(false);
  const [deleteId, setDeleteId] = useState({ _id: '', name: '' });

  return (
    <ListAccountBlock>
      <table>
        <thead>
          <tr>
            <th className="column_star"></th>
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
              <tr key={account._id}>
                <td
                  onClick={() => {
                    toogleFavoritesAccount(account._id, account.favorites);
                  }}
                >
                  {account.favorites ? (
                    <RoundButton color="white" style={{ color: 'red' }}>
                      <FiStar />
                    </RoundButton>
                  ) : (
                    <RoundButton color="white">
                      <FiStar />
                    </RoundButton>
                  )}
                </td>
                <td>{account.name}</td>
                <td>{replacePhone(account.contact.office)}</td>
                <td>{replacePhone(account.contact.fax)}</td>
                <td className="data_address">{account.detail.address}</td>
                <td style={{ textAlign: 'right' }}>
                  <RoundButton color="white">
                    <FiAlertCircle />
                  </RoundButton>
                  <RoundButton color="white">
                    <FiEdit />
                  </RoundButton>
                  <RoundButton
                    color="white"
                    onClick={() => {
                      openDeleteDialog();
                      setDeleteId(account);
                      // onDeleteAccount(account._id);
                    }}
                  >
                    <FiTrash2 />
                  </RoundButton>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Dialog
        visible={deleteDialog}
        onClose={closeDeleteDialog}
        title={deleteId.name}
        mode="delate"
        onClick={() => {
          onDeleteAccount(deleteId._id, deleteId.name);
          closeDeleteDialog();
        }}
      />
    </ListAccountBlock>
  );
}
