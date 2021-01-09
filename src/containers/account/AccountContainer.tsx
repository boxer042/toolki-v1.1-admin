import React, { useCallback, useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import useModal from './../../components/hooks/useModal';
import useDialog from './../../components/hooks/useDialog';
import {
  deleteAccount,
  favoritesAccount,
  fetchAccounts,
  createRejected,
  createPending,
  createFulfilled,
} from '../../modules/accountsSlice';
import ListAccount from '../../templates/account/ListAccount';
import Modal from '../../components/Modal';
import CreateAccount from './../../templates/account/CreateAcount';
import { createAccount } from './../../lib/api/account';
import { accountValidate } from './../../lib/validate';

export interface IAccountContainerProps {}

export default function AccountContainer(props: IAccountContainerProps) {
  const dispatch = useDispatch();
  const { accounts, loading, error } = useSelector(
    (state: RootState) => state.accounts,
  );

  const [createModal, openCreateModal, closeCreateModal] = useModal(false);
  const [createDialog, openCreateDialog, closeCreateDialog] = useDialog(false);

  const [errors, setErrors] = useState({});
  const [submited, setSubmited] = useState(false);
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
    // hook으로 만들기
    dispatch(fetchAccounts());
  }, [dispatch]);

  const toogleFavoritesAccount = (_id: string, favorites: boolean) => {
    dispatch(favoritesAccount({ _id, favorites }));
  };

  const onCreateAccount = async () => {
    setErrors({});
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
    const validation = {};
    const error = accountValidate(inputs); // 이거 하나로 내가 겪은 문제 다해결한것같은데? 리랜더링되야 useState에 적용되던거..
    if (Object.keys(error).length !== 0) {
      setErrors(error);
      return;
    }
    dispatch(createPending());
    try {
      const res = await createAccount(account);
      console.log(res.data.account);
      dispatch(createFulfilled(res.data.account));

      //   console.log(res);
    } catch (err) {
      const { status, message } = err.response.data;
      if (status === '409') {
        setErrors({ name: message });
        dispatch(createRejected(err.response.data));
        return;
      }
      console.log(err);
      return;
    }
    closeCreateModal();
    setInputs({
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
  };
  const onDeleteAccount = useCallback(
    (_id: string, name: string) => {
      console.log(name); // 연구용
      dispatch(deleteAccount(_id));
    },
    [dispatch],
  );

  if (loading) return <p>로딩중..</p>;
  return (
    <>
      <PageHeader
        title="거래처"
        buttons={[
          { label: '거래처 추가', color: 'primary', onClick: openCreateModal },
        ]}
      />
      <ListAccount
        accounts={accounts}
        error={error}
        onDeleteAccount={onDeleteAccount}
        toogleFavoritesAccount={toogleFavoritesAccount}
      />
      <Modal
        visible={createModal}
        title={'거래처 추가'}
        onClose={() => {
          closeCreateModal();
          setErrors({});
        }}
        buttons={[
          {
            label: '거래처 추가',
            color: 'primary',
            size: 'large',
            onClick: () => {
              onCreateAccount();
              //   setErrors(accountValidate(inputs));
              //   setSubmited(true);
            },
            fullWidths: true,
            disabled: inputs.name.length === 0,
            // || Object.keys(errors).length !== 0
          },
        ]}
      >
        <CreateAccount
          inputs={inputs}
          setInputs={setInputs}
          errors={errors}
          submited={submited}
          setSubmited={setSubmited}
          onAction={onCreateAccount}
        />
      </Modal>
    </>
  );
}
