import React, { useState } from 'react';
import styled from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import { palette } from './../../lib/styles/palette';

export interface IAccountProps {
  tableData: IAccount[];
  error?: string | null | undefined;
}

const AccountWrapper = styled.div`
  width: 100%;
  background-color: ${palette.baseBackground};
  padding: 1rem;
`;

const AccountTable = styled.table`
  border: 1px solid ${palette.baseLine};
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 0.5rem;
  }
`;

const Tr = styled.tr<{ active?: string }>`
  cursor: pointer;
  border: 1px solid ${palette.baseLine};
  &:hover,
  &.active {
    background-color: black;
  }
  background-color: ${({ active }) => (active === 'ture' ? 'red' : '')};
`;

export default function Account({ tableData, error }: IAccountProps) {
  const [expanded, setExpanded] = useState<string>();
  console.log(expanded);
  return (
    <AccountWrapper>
      <AccountTable>
        <thead>
          <tr>
            <th>#</th>
            <th>거래처명</th>
            <th>사무실</th>
            <th>팩스</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length === 0 ? (
            <tr>
              <td colSpan={5}>데이터없음</td>
            </tr>
          ) : (
            tableData.map((data) => (
              <>
                <Tr
                  key={data._id}
                  active={expanded === '광성분무기' ? 'true' : 'false'}
                  onClick={() => setExpanded(data.name)}
                >
                  <td>#</td>
                  <td>{data.name}</td>
                  <td>{data.contact.office}</td>
                  <td>{data.contact.fax}</td>
                  <td>{data.detail.address}</td>
                </Tr>
                {/* {showDetail ? (
                  <Tr>
                    <td colSpan={5} className="expanded">
                      <div>
                        <h3>Details</h3>
                      </div>
                    </td>
                  </Tr>
                ) : null} */}
              </>
            ))
          )}
        </tbody>
      </AccountTable>
    </AccountWrapper>
  );
}
