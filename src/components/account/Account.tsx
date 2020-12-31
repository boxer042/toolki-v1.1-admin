import React, { useState } from 'react';
import {
  FaCaretSquareDown,
  FaCaretSquareRight,
  FaRegFrown,
} from 'react-icons/fa';
import styled, { css } from 'styled-components';
import { IAccount } from '../../modules/accountsSlice';
import AccountDetail from './AccountDetail';
import { palette } from './../../lib/styles/palette';
import { replacePhone } from './../../lib/utils';

export interface IAccountProps {
  accounts: IAccount[];
  error: string | null | undefined;
}

const AccountWrapper = styled.div`
  width: 100%;
  background-color: ${palette.baseBackground};
  border-radius: 0.25rem;
  font-size: 0.95rem;
  padding: 0.75rem;
  .active {
    color: #5c7cfa;
  }
  table {
    width: 100%;
  }

  th {
    padding: 0.5rem;
  }
  td {
    border-top: 1px solid ${palette.baseLine};

    padding: 0.75rem 0.5rem;
  }
  svg {
    font-size: 12px;
  }
`;

const SelectedIcons = styled.span<{ active?: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      svg {
        color: #5c7cfa;
      }
    `}
`;

const TbodyContainer = styled.tr<{ active?: boolean }>`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background-color: ${palette.tableBackgroundHover};
      svg {
        color: #5c7cfa;
      }
    `}
  &:hover {
    background-color: ${palette.tableBackgroundHover};
  }
`;

const AccountDetailContainer = styled.tr<{ active?: boolean }>`
  ${(props) =>
    props.active &&
    css`
      td {
        /* border: none; */
        /* box-shadow: 0 5px 3px #f1f3f5; */
      }
      svg {
        color: #5c7cfa; // 안쪽 svg 바뀌는것 확인
      }
    `};
`;

const NoDataContainer = styled.tr`
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
  td {
    padding: 2rem 0;
  }
  svg {
    font-size: 5rem;
  }
`;

export default function Account({ accounts, error }: IAccountProps) {
  const [isSelected, setIsSelected] = useState<string[]>([]);

  console.log(`Selectd Table ID : ${isSelected}`);

  const handleTableAllSelected = (accounts: IAccount[]) => {
    const selectedIdsArray = accounts.map((account) => account._id);
    setIsSelected(isSelected.concat(selectedIdsArray));
    if (isSelected.length > 0) {
      setIsSelected([]);
    }
  };

  const handleTableSelected = (id: string) => {
    if (isSelected.includes(id)) {
      setIsSelected(isSelected.filter((select) => select !== id));
    } else {
      setIsSelected(isSelected.concat(id));
    }
  };

  return (
    <AccountWrapper>
      <table>
        <thead>
          <tr>
            <th>
              <SelectedIcons
                onClick={() => handleTableAllSelected(accounts)}
                active={isSelected.length > 0}
              >
                {isSelected.length > 0 ? (
                  <FaCaretSquareDown />
                ) : (
                  <FaCaretSquareRight />
                )}
              </SelectedIcons>
            </th>
            <th>거래처명</th>
            <th>사무실</th>
            <th>팩스</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length === 0 ? (
            <>
              <NoDataContainer>
                <td colSpan={4}>
                  <div>
                    <FaRegFrown />
                  </div>
                  {error !== null ? <div>{error}</div> : <div>No data</div>}
                </td>
              </NoDataContainer>
              <AccountDetail />
            </>
          ) : (
            accounts.map((account) => (
              <React.Fragment key={account._id}>
                <TbodyContainer
                  active={isSelected.includes(account._id)}
                  onClick={() => handleTableSelected(account._id)}
                >
                  <td width="5%">
                    {isSelected.includes(account._id) ? (
                      <FaCaretSquareDown />
                    ) : (
                      <FaCaretSquareRight />
                    )}
                  </td>
                  <td>{account.name}</td>
                  <td>{replacePhone(account.contact.office)}</td>
                  <td>{replacePhone(account.contact.fax)}</td>
                </TbodyContainer>

                {isSelected.includes(account._id) ? (
                  <AccountDetailContainer
                    active={isSelected.includes(account._id)}
                  >
                    <td colSpan={4}>
                      <div>
                        <div>당담자 : {account.manager.name}</div>
                        <div>직책 : {account.manager.position}</div>
                        <div>휴대폰 : {account.manager.mobile}</div>
                        <div>주소 : {account.detail.address}</div>
                        <div>사업자번호 : {account.detail.businessNumber}</div>
                        <div>대표자: {account.detail.ceo}</div>
                      </div>
                    </td>
                  </AccountDetailContainer>
                ) : undefined}
              </React.Fragment>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
          </tr>
        </tfoot>
      </table>
    </AccountWrapper>
  );
}
