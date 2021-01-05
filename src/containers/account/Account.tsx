import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import AddAcount from '../../templates/account/AddAcount';
import AccountList from '../../templates/account/AccountList';
import { RootState } from '../../modules';
import useModal from './../../components/hooks/useModal';

const AccountBlock = styled.div``;

export interface IAccountProps {}

export default function Account(props: IAccountProps) {
  const { accounts, loading, error } = useSelector(
    (state: RootState) => state.accounts,
  );

  const [createModal, openCreateModal, closeCreateModal] = useModal(false);

  return (
    <AccountBlock>
      <PageHeader
        title="거래처"
        buttons={[
          {
            label: '추가',
            color: 'primary',
            onClick: openCreateModal,
          },
        ]}
      />
      <AccountList accounts={accounts} />

      {/* Create Account Modal */}
      <Modal
        visible={createModal}
        title={'거래처 추가'}
        onClose={closeCreateModal}
      >
        <AddAcount />
      </Modal>
    </AccountBlock>
  );
}
