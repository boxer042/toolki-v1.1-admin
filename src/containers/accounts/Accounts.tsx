import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { fetchAccounts } from '../../modules/accountsSlice';
import Account from '../../components/account/Account';
import PageHeader from '../../components/pageHeader/PageHeader';

export interface IAccountsProps {}

export default function Accounts(props: IAccountsProps) {
  const { accounts, loading } = useSelector(
    (state: RootState) => state.accounts,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  if (loading) return <p>로딩중...</p>;
  return (
    <PageHeader
      pageTitle="거래처"
      buttons={[
        {
          label: '추가',
          color: 'red',
          onClick: () => {
            alert('추가');
          },
        },
        {
          label: '삭제',
          color: 'gray',
          onClick: () => {
            alert('삭제');
          },
        },
      ]}
    >
      <Account accounts={accounts} />
      {/* <Table rowKey={(record) => record._id} dataSource={accounts}>
        <Column title="상호" dataIndex="name" key="name" />
        <Column
          title="전화번호"
          dataIndex="phoneNumber"
          key="phoneNumber"
          render={(phoneNumber) => (
            <div>
              {phoneNumber
                .replace(/[^0-9]/g, '')
                .replace(
                  /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
                  '$1-$2-$3',
                )
                .replace('--', '-')}
            </div>
          )}
        />
        <Column title="주소" dataIndex="address" key="address" />
      </Table> */}
    </PageHeader>
  );
}
