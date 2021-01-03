import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { createAccount, fetchAccounts } from '../../modules/accountsSlice';
import Account from '../../components/v1/account/Account';
import AccountModal, {
  Tinputs,
} from '../../components/v1/account/AccountModal';
import PageHeader from '../../components/v1/pageHeader/PageHeader';
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

  const oncreateAccount = useCallback(
    async (inputs: Tinputs) => {
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
      const account = {
        name: name,
        contact: {
          office: office,
          fax: fax,
        },
        manager: {
          name: manager,
          position: position,
          mobile: mobile,
        },
        detail: {
          address: address,
          businessNumber: businessNumber,
          ceo: ceo,
        },
      };
      dispatch(createAccount(account));
    },
    [dispatch],
  );

  const openAddModal = useCallback(() => {
    dispatch(openAccountModal());
  }, [dispatch]);

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
          onClick: openAddModal,
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
      <AccountModal
        visible={account.visible}
        onClose={onClose}
        oncreateAccount={oncreateAccount}
      />
      <Account accounts={accounts} error={error} />
    </PageHeader>
  );
}
