import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import Modal from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import CreateAccount, { TInputs } from '../../templates/account/CreateAcount';
import ListAccount from '../../templates/account/ListAccount';
import { RootState } from '../../modules';
import useModal from './../../components/hooks/useModal';
import { createAccount, fetchAccounts } from '../../modules/accountsSlice';
import useDialog from './../../components/hooks/useDialog';
import Dialog from '../../components/Dialog';
import { accountValidate } from './../../lib/validate';

const AccountBlock = styled.div``;

export interface IAccountProps {}

export default function Account(props: IAccountProps) {
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

  const onCreateAccount = useCallback(
    async (data: TInputs) => {
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
      } = data;
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
      closeCreateDialog();
      closeCreateModal();
    },
    [dispatch, closeCreateDialog, closeCreateModal],
  );

  if (loading) return <p>로딩중...</p>;
  return (
    <AccountBlock>
      <PageHeader
        title="거래처"
        buttons={[
          {
            label: '추가',
            color: 'white',
            onClick: openCreateModal,
            outlined: true,
          },
        ]}
      />
      <div style={{ padding: '1rem', paddingBottom: '0' }}>
        <div style={{ borderBottom: '1px solid #ddd', height: '90px' }}>
          <div>거래처 등록 수 : 20개</div>
          <div>즐겨찾기 : 광성분무기 선일농기계 (주)범양</div>
        </div>
      </div>
      <ListAccount accounts={accounts} error={error} />
      {/* Create Account Modal */}
      <Modal
        visible={createModal}
        title={'거래처 추가'}
        onClose={closeCreateModal}
        buttons={[
          {
            label: '거래처 추가',
            color: 'primary',
            size: 'large',
            onClick: () => {
              setErrors(accountValidate(inputs));
              setSubmited(true);
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
          onAction={openCreateDialog}
        />
        <Dialog
          visible={createDialog}
          title={inputs.name}
          onClose={closeCreateDialog}
          onClick={() => onCreateAccount(inputs)}
        />
      </Modal>
    </AccountBlock>
  );
}
