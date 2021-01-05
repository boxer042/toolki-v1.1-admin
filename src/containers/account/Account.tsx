import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeLayer, openLayer } from '../../modules/baseSlice';
import AddAcount from '../../templates/account/AddAcount';
import AccountList from '../../templates/account/AccountList';
import { RootState } from '../../modules';

const AccountBlock = styled.div``;

export interface IAccountProps {}

export default function Account(props: IAccountProps) {
  const { accounts, loading, error } = useSelector((state: RootState) => state.accounts);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <AccountBlock>
      <PageHeader
        title="거래처"
        buttons={[
          {
            label: '추가',
            color: 'primary',
            onClick: () => {
              dispatch(openLayer());
              setOpenCreateModal(true);
            },
          },
        ]}
      />
      <AccountList accounts={accounts} />
      <Modal
        visible={openCreateModal}
        title={'거래처 추가'}
        onClose={() => {
          dispatch(closeLayer());
          setOpenCreateModal(false);
        }}
      >
        <AddAcount />
      </Modal>
    </AccountBlock>
  );
}
