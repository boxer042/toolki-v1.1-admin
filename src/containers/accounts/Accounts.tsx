import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { AddAccount, fetchAccounts } from '../../modules/accountsSlice';
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

  const [inputs, setInputs] = useState({
    name: '',
    address: '',
    office: '',
    fax: '',
    manager: '',
    position: '',
    mobile: '',
    businessNumber: '',
    ceo: '',
  });

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  // const form = new FormData();
  //   // if (categoryName === '') {
  //   //   alert('카테고리 네임공백');
  //   //   return;
  //   // }
  //   form.append('name', categoryName);
  //   form.append('parentId', parentCategoryId);
  //   form.append('categoryImage', categoryImage);
  //   dispatch(addCategory(form));
  //   setShow(false);

  // const onAddAccount = useCallback(
  //   async (inputs) => {
  //     dispatch(AddAccount(inputs));
  //   },
  //   [inputs],
  // );
  const onAddAccount = () => {
    console.log(inputs);
  };
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
      <AccountModal
        visible={account.visible}
        onClose={onClose}
        inputs={inputs}
        setInputs={setInputs}
        onAddAccount={onAddAccount}
      />
      <Account accounts={accounts} error={error} />
    </PageHeader>
  );
}
