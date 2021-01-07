import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import RoundButton from '../button/RoundButton';

const GlobalSearchBlock = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 34px;
  height: 48px;
  width: 300px;
  border: 1px solid ${base.gray_Line};
  padding: 5px 5px 5px 20px;
  font-size: 1.125rem;
  &:focus {
    border: 1px solid ${base.primary};
  }
  &::placeholder {
    color: ${base.gray_SubTitle};
  }
`;

const SearchIcon = styled.div`
  top: 8px;
  right: 8px;
  bottom: 8px;
  position: absolute;
`;

export interface IGlobalSearchProps {}

export default function GlobalSearch(props: IGlobalSearchProps) {
  return (
    <GlobalSearchBlock>
      <SearchInput placeholder="검색 시작하기" />
      <SearchIcon>
        <RoundButton>
          <FiSearch />
        </RoundButton>
      </SearchIcon>
    </GlobalSearchBlock>
  );
}
