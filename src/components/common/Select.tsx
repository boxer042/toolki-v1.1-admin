import React from 'react';
import styled from 'styled-components';
import { palette } from '../../lib/styles/palette';

const SelectBlock = styled.div`
  margin-top: 1.75rem;
`;

const SelectWrapper = styled.select`
  padding: 0.75rem 2.35rem 0.75rem 0.75rem;
  border: 1px solid ${palette.baseLine};
  font-size: 1.125rem;
  border-radius: 4px;
  width: 100%;

  &:focus {
    border: 1px solid #12b886;
  }
`;

const Label = styled.div`
  margin: 0.5rem 0.5rem;
  display: flex;
`;

const Required = styled.div`
  color: #c92a2a;
  font-weight: 600;
  margin-left: 0.25rem;
`;
const Error = styled.div`
  margin: 0.5rem 0.5rem;
  color: #c92a2a;
  font-weight: 600;
`;

export interface ISelectProps {}

export default function Select(props: ISelectProps) {
  return (
    <SelectBlock>
      <Label>담당자 직급</Label>
      <SelectWrapper>
        <option disabled value="">
          담당자 직급
        </option>
        <option>대표</option>
        <option>이사</option>
        <option>부장</option>
        <option>차장</option>
        <option>과장</option>
        <option>대리</option>
        <option>사원</option>
      </SelectWrapper>
    </SelectBlock>
  );
}
