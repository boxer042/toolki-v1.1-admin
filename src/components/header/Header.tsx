import * as React from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { zIndexes } from '../../lib/styles/zIndexes';
import { palette } from '../../lib/styles/palette';
import { SiWolframlanguage } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: ${zIndexes.header};
  transition: 0.5s;
  color: ${palette.baseFontColor};
  background-color: ${palette.baseBackground};
`;

const HeaderStart = styled.div`
  display: flex;
`;

const Toggle = styled.div`
  display: flex;
  padding-left: 0.5rem;
  align-items: center;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    color: ${palette.baseFontHoverAndActive};
  }
`;
const Logo = styled(NavLink)`
  display: flex;
  margin-left: 1rem;
  &:hover,
  &.active {
    color: ${palette.baseFontColor};
  }
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-right: 0.75rem;
  color: ${palette.baseLogoColor};
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  color: ${palette.baseFontColor};
`;

export default function Header({ side, setSide }: IHeaderProps) {
  console.log(`사이드바 : ${side}`);
  return (
    <HeaderWrapper side={side}>
      <HeaderStart>
        <Toggle onClick={() => setSide(!side)}>
          <MdMenu />
        </Toggle>
        <Logo to="/">
          <Img>
            <SiWolframlanguage />
          </Img>
          <Title>Toolki</Title>
        </Logo>
      </HeaderStart>

      <Avatar>
        <FaUserCircle />
        <Name>관리자</Name>
      </Avatar>
    </HeaderWrapper>
  );
}
