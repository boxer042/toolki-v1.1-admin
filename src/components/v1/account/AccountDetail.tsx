import * as React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '../../../lib/styles/palette1';
import Button from '../common/Button';
import { formatBusiness } from '../../../lib/utils';
import { replacePhone } from '../../../lib/utils';

export interface IAccountDetiailProps {
  active: boolean;
  accountName: string;
  contact: {
    office: string;
    fax: string;
  };
  manager: {
    name: string;
    position: string;
    mobile: string;
  };
  detail: {
    address: string;
    businessNumber: string;
    ceo: string;
  };
}

const AccountDetailContainer = styled.tr<{ active?: boolean }>`
  ${(props) => props.active && css``};
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

export default function AccountDetiail({
  active,
  manager,
  contact,
  detail,
  accountName,
}: IAccountDetiailProps) {
  return (
    <AccountDetailContainer active={active}>
      <td colSpan={4}>
        <AccountDetailHeader>
          <AccountDetailTitle>{accountName}</AccountDetailTitle>
          <AccountDetailSubTitle>{detail.address}</AccountDetailSubTitle>
        </AccountDetailHeader>
        <AccountDetailSection>
          <AccountDetailStart>
            <AccountDetailSubTitle>Contact</AccountDetailSubTitle>
            <div>
              <span>사무실 : </span>
              <span>{replacePhone(contact.office)}</span>
            </div>
            <div>팩스 : {replacePhone(contact.fax)}</div>
            <div>모바일 : {replacePhone(manager.mobile)}</div>
          </AccountDetailStart>
          <AccountDetailCenter>
            <AccountDetailSubTitle>Manager</AccountDetailSubTitle>
            <div>성명 : {manager.name}</div>
            <div>직급 : {manager.position}</div>
            <div>모바일 : {replacePhone(manager.mobile)}</div>
          </AccountDetailCenter>
          <AccountDetailEnd>
            <AccountDetailSubTitle>Certificate</AccountDetailSubTitle>
            <div>사업자번호 : {formatBusiness(detail.businessNumber)}</div>
            <div>대표자 : {detail.ceo}</div>
            <div>주소 : {detail.address}</div>
          </AccountDetailEnd>
        </AccountDetailSection>
        <AccountDetailFooter>
          <Button color="gray" size="small">
            삭제
          </Button>
          <Button color="red" size="small">
            수정
          </Button>
        </AccountDetailFooter>
      </td>
    </AccountDetailContainer>
  );
}
