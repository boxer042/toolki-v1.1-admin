import React from 'react';
import styled from 'styled-components';
import { FiHome, FiShoppingBag, FiUsers } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { RiBuilding4Line, RiLineChartLine } from 'react-icons/ri';
import { base } from './../../foundations/base';

const MobileNavBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Menu = styled(NavLink)`
  display: column;
  color: ${base.gray_SubTitle};
  margin: 0 0.5rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  &:hover {
    color: ${base.primary};
  }
`;
const Title = styled.div`
  display: flex;

  justify-content: center;
  font-size: 0.75rem;
`;

export interface IMobileNavProps {}

export default function MobileNav(props: IMobileNavProps) {
  return (
    <MobileNavBlock>
      <Menu to="/">
        <Icon>
          <FiHome />
        </Icon>
        <Title>홈</Title>
      </Menu>
      <Menu to="/">
        <Icon>
          <FiShoppingBag />
        </Icon>
        <Title>상품</Title>
      </Menu>
      <Menu to="/">
        <Icon>
          <RiLineChartLine />
        </Icon>
        <Title>판매</Title>
      </Menu>
      <Menu to="/">
        <Icon>
          <RiBuilding4Line />
        </Icon>
        <Title>거래처</Title>
      </Menu>
      <Menu to="/">
        <Icon>
          <FiUsers />
        </Icon>
        <Title>고객</Title>
      </Menu>
    </MobileNavBlock>
  );
}
