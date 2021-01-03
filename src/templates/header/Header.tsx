import React from 'react';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import UserToggleButton from '../user/UserToggleButton';
import { FiSearch } from 'react-icons/fi';

const HeaderBlock = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: white;
  padding: 1rem;
  border-bottom: 1px solid ${base.gray_Line};
  @media (min-width: 744px) {
    border: none;
  }
`;

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <HeaderBlock>
      <Logo link="/" />
      <div>
        Search
        <Button shape="round">
          <FiSearch />
        </Button>
      </div>

      <UserToggleButton />
    </HeaderBlock>
  );
}
