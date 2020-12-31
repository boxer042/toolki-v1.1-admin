import * as React from 'react';
import styled, { css } from 'styled-components';
import { palette } from './../../lib/styles/palette';
import Button from '../common/Button';
import { IAccount } from '../../modules/accountsSlice';

export interface IAccountDetiailProps {
  accounts?: IAccount[];
  error?: string | null | undefined;
}

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

const AccountDetailHeader = styled.div``;
const AccountDetailTitle = styled.div`
  font-size: 1.35rem;
  font-weight: 600;
`;
const AccountDetailSubTitle = styled.div`
  color: ${palette.subFontColor};
`;
const AccountDetailSection = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  svg {
    font-size: 1rem;
  }
`;
const AccountDetailStart = styled.div`
  flex: 1;
`;
const AccountDetailCenter = styled.div`
  flex: 1;
`;
const AccountDetailEnd = styled.div`
  flex: 1;
`;
const AccountDetailFooter = styled.div`
  margin: 1rem 0 0 0;
  float: right;
`;
export default function AccountDetiail(props: IAccountDetiailProps) {
  return (
    <AccountDetailContainer active={true}>
      <td colSpan={4}>
        <AccountDetailHeader>
          <AccountDetailTitle>대동기계상사</AccountDetailTitle>
          <AccountDetailSubTitle>대전광역시 동구 원동</AccountDetailSubTitle>
        </AccountDetailHeader>
        <AccountDetailSection>
          <AccountDetailStart>
            <AccountDetailSubTitle>Contact</AccountDetailSubTitle>
            <div>사무실 : 042-273-4367</div>
            <div>팩스 : 042-283-8356</div>
            <div>모바일 : 010-1111-1111</div>
          </AccountDetailStart>
          <AccountDetailCenter>
            <AccountDetailSubTitle>Manager</AccountDetailSubTitle>
            <div>성명 : 홍길동</div>
            <div>직급 : 부장</div>
            <div>모바일 : 010-2222-2222</div>
          </AccountDetailCenter>
          <AccountDetailEnd>
            <AccountDetailSubTitle>Certificate</AccountDetailSubTitle>
            <div>사업자번호 : 306-02-65185</div>
            <div>대표자 : 홍길순</div>
            <div>주소 : 대전광역시 동구 원동</div>
          </AccountDetailEnd>
        </AccountDetailSection>
        <AccountDetailFooter>
          <Button color="red">수정</Button>
          <Button color="gray">삭제</Button>
          <Button color="gray">닫기</Button>
        </AccountDetailFooter>
      </td>
    </AccountDetailContainer>
  );
}
