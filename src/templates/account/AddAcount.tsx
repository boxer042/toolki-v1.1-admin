import React from 'react';
import styled from 'styled-components';
import Button from './../../components/Button';

const AddAcountBlock = styled.form``;

export interface IAddAcountProps {}

export default function AddAcount(props: IAddAcountProps) {
  return (
    <AddAcountBlock
      onSubmit={() => {
        alert('추가 하시겠습니까?');
      }}
    >
      <Button>거래처 추가</Button>
    </AddAcountBlock>
  );
}
