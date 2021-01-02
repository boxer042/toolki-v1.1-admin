import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { fetchAccounts } from '../../modules/accountsSlice';
import Account from '../../components/account/Account';
import AccountModal from '../../components/account/AccountModal';
import PageHeader from '../../components/pageHeader/PageHeader';
import { openAccountModal, closeAccountModal } from '../../modules/baseSlice';
export interface IAccountsProps {}

export default function Accounts(props: IAccountsProps) {
  const { accounts, loading, error } = useSelector(
    (state: RootState) => state.accounts,
  );
  const { account } = useSelector((state: RootState) => state.base);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const handleAddAccountModal = () => {
    dispatch(openAccountModal());
  };
  const onClose = useCallback(() => {
    dispatch(closeAccountModal());
    // TODO: 폼안에 초기화 시키기
  }, [dispatch]);

  if (loading) return <p>로딩중...</p>;
  return (
    <PageHeader
      pageTitle="거래처"
      buttons={[
        {
          label: '추가',
          color: 'red',
          onClick: handleAddAccountModal,
        },
        // {
        //   label: '삭제',
        //   color: 'gray',
        //   onClick: () => {
        //     alert('삭제');
        //   },
        // },
      ]}
    >
      <AccountModal visible={account.visible} onClose={onClose} />
      <Account accounts={accounts} error={error} />
    </PageHeader>
  );
}
