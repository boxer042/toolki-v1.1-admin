import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { zIndexes } from './../../lib/styles/zIndexes';
import { palette } from './../../lib/styles/palette';
import { layout } from './../../lib/styles/layout';
import { FaBuilding, FaDatabase, FaStore, FaUser } from 'react-icons/fa';
import { MdHome, MdSettings } from 'react-icons/md';

export interface ISidebarProps {
  side?: boolean;
}

const SidebarWrapper = styled.div<{ side?: boolean }>`
  position: fixed;
  top: 4rem;
  left: ${(props) => (props.side ? 0 : '-30%')};
  width: ${layout.baseSidebarWidth};
  height: calc(100vh - 4rem);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: ${zIndexes.sidebar};
  border-right: 1px solid ${palette.baseLine};
  background-color: ${palette.baseBackground};
  @media screen and (min-width: 768px) {
    width: ${(props) =>
      props.side ? '' : `calc(${layout.baseSidebarWidth} + 168px)`};
    left: 0;
    padding: 1rem 1rem 0 0;
  }
`;
const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Menu = styled.div``;
const MenuItem = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: ${palette.baseFontColor};
  position: relative;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  svg {
    font-size: 1.25rem;
  }
  &:hover,
  &.active {
    background-color: ${palette.baseBackgroundHover};
    color: red;
  }
`;

export default function Sidebar({ side }: ISidebarProps) {
  return (
    <SidebarWrapper side={side}>
      <Navbar>
        <Menu>
          <MenuItem exact to="/">
            <MdHome />
            현황판
          </MenuItem>
          <MenuItem to="/a">
            <FaStore />
            상품
          </MenuItem>
          <MenuItem to="/b">
            <FaDatabase />
            매입
          </MenuItem>
          <MenuItem to="/accounts">
            <FaBuilding />
            거래처
          </MenuItem>
          <MenuItem to="/c">
            <FaUser />
            고객
          </MenuItem>
        </Menu>
        <MenuItem to="/d">
          <MdSettings />
          Settings
        </MenuItem>
      </Navbar>
    </SidebarWrapper>
  );
}
