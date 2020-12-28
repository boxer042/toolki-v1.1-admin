import * as React from 'react';
import {
  FcBearish,
  FcBusinessman,
  FcDam,
  FcSalesPerformance,
  FcSettings,
  FcShop,
  FcStatistics,
} from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { zIndexes } from './../../lib/styles/zIndexes';
import { palette } from './../../lib/styles/palette';

export interface ISidebarProps {
  side?: boolean;
}

const SidebarWrapper = styled.div<{ side?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 68px;
  height: 100vh;
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: ${zIndexes.sidebar};
  background-color: ${palette.INDIGO4};
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.side ? '' : `calc(68px + 156px)`)};
    left: 0;
    pading: 1rem 1rem 0 0;
  }
`;
const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const Logo = styled.a`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: white;
`;
const Menu = styled.div``;
const MenuItem = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  color: white;
  position: relative;
  margin-bottom: 1.5rem;
  transition: 0.3s;
  svg {
    font-size: 1.25rem;
  }
`;
export default function Sidebar({ side }: ISidebarProps) {
  return (
    <SidebarWrapper side={side}>
      <Navbar>
        <div>
          <Logo>
            <FcSalesPerformance />
            Toolki
          </Logo>
          <Menu>
            <MenuItem to="/">
              <FcBearish />
              Dashboard
            </MenuItem>
            <MenuItem to="/">
              <FcShop />
              Products
            </MenuItem>
            <MenuItem to="/">
              <FcStatistics />
              Purchases
            </MenuItem>
            <MenuItem to="/accounts">
              <FcDam />
              Accounts
            </MenuItem>
            <MenuItem to="/">
              <FcBusinessman />
              Customers
            </MenuItem>
          </Menu>
        </div>
        <MenuItem to="/">
          <FcSettings />
          Settings
        </MenuItem>
      </Navbar>
    </SidebarWrapper>
  );
}
