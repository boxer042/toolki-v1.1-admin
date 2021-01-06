import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CreateAccount, { TInputs } from '../../templates/account/CreateAcount';
import AccountList from '../../templates/account/AccountList';
import { RootState } from '../../modules';
import useModal from './../../components/hooks/useModal';
import { fetchAccounts } from '../../modules/accountsSlice';

const AccountBlock = styled.div``;

export interface IAccountProps {}

export default function Account(props: IAccountProps) {
  const dispatch = useDispatch();
  const { accounts, loading, error } = useSelector(
    (state: RootState) => state.accounts,
  );

  const [createModal, openCreateModal, closeCreateModal] = useModal(false);

  const [inputs, setInputs] = useState({
    name: '',
    address: '',
    office: '',
    fax: '',
    manager: '',
    position: '',
    mobile: '',
    bizNumber: '',
    ceo: '',
  });

  useEffect(() => {
    // hook으로 만들기
    dispatch(fetchAccounts());
  }, [dispatch]);

  const onCreateAccount = useCallback(async (data: TInputs) => {
    console.log(data);
    closeCreateModal();
  }, []);

  if (loading) return <p>로딩중...</p>;
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
      <AccountList accounts={accounts} error={error} />
      {/* Create Account Modal */}
      <Modal
        visible={createModal}
        title={'거래처 추가'}
        onClose={closeCreateModal}
        onAction={() => onCreateAccount(inputs)}
        onDialog={() => onCreateAccount(inputs)}
      >
        <CreateAccount inputs={inputs} setInputs={setInputs} />
      </Modal>
    </AccountBlock>
  );
}
