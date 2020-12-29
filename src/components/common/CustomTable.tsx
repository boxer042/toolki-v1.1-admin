import * as React from 'react';
import styled from 'styled-components';
import { palette } from './../../lib/styles/palette';

export interface ICustomTableProps {}

const TableWrapper = styled.table`
  /* border: 1px solid ${palette.baseLine}; */
  border-collapse: collapse;
  width: 100%;
  padding-left: 5rem;
  background-color: ${palette.baseBackground};
  th {
    border: 1px solid ${palette.baseLine};
  }
  td {
    border: 1px solid ${palette.baseLine};
  }
`;

export default function CustomTable(props: ICustomTableProps) {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th rowSpan={2}>#</th>
          <th rowSpan={2}>거래처명</th>
          <th colSpan={4}>전화번호</th>
          <th rowSpan={2}>주소</th>
          <th rowSpan={2}>비고</th>
        </tr>
        <tr>
          <th>사무실</th>
          <th>팩스</th>
          <th>핸드폰</th>
        </tr>
      </thead>
    </TableWrapper>
  );
}
