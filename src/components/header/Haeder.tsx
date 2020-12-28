import * as React from 'react';
import styled from 'styled-components';
import { FcManager, FcMenu } from 'react-icons/fc';
import { zIndexes } from './../../lib/styles/zIndexes';

export interface IHeaderProps {
  side?: boolean;
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderWrapper = styled.div<{ side?: boolean }>`
  width: 100%;
  height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: ${zIndexes.header};
  transition: 0.5s;
  padding-left: ${(props) => (props.side ? `calc(68px + 1rem)` : '')};
  @media screen and (min-width: 768px) {
    height: calc(3rem + 1rem);
    padding: 0 2rem 0 calc(68px + 2rem);
    padding-left: ${(props) => (props.side ? '' : `calc(68px + 188px)`)};
  }
`;

const Toggle = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;
const Avatar = styled.a`
  display: flex;
  svg {
    font-size: 1.5rem;
  }
`;
const Name = styled.div``;

export default function Header({ side, setSide }: IHeaderProps) {
  console.log(side);
  return (
    <HeaderWrapper side={side}>
      <Toggle onClick={() => setSide(!side)}>
        <FcMenu />
      </Toggle>
      <Avatar>
        <FcManager />
        <Name>관리자</Name>
      </Avatar>
    </HeaderWrapper>
  );
}
