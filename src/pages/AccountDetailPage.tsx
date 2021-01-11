import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getAccount } from './../lib/api/account';

export interface IAccountDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

export default function AccountDetailPage({ match }: IAccountDetailPageProps) {
  const { id } = match.params;
  const [fetchAccount, setFetchAccount] = useState({
    name: null,
  });
  const [errorAccount, setErrorAccount] = useState('');
  const fetchData = async (id: string) => {
    try {
      const res = await getAccount(id);
      setFetchAccount(res.data);
    } catch (err) {
      if (err.response.data.status === '404') {
        console.log('흠');
      }
      setErrorAccount(err.response.data.status);
    }
  }; // 유즈콜백 데이터로 만들라고 경고뜸.

  useEffect(() => {
    fetchData(id);
  }, [id]);
  console.log(errorAccount);
  if (errorAccount) return <p>Account Not Found</p>;
  console.log(fetchAccount);
  return (
    <>
      {id}디테일 페이지<div>{fetchAccount.name}</div>
    </>
  );
}
