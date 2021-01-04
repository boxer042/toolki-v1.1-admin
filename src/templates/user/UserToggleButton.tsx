import React from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { base } from '../../foundations/base';

const UserToggleButtonBlock = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 5px 5px 5px 12px;
  border-radius: 21px;
  height: 2.625rem;
  width: 77px;
  background-color: #fff;
  border: 1px solid ${base.gray_Line};
  &:hover {
    box-shadow: 1px 2px 5px #ddd;
    transition: ease 0.2s;
  }
  .menu {
    display: flex;
    font-size: 1rem;
    color: ${base.gray_Title};
  }
  .user {
    color: ${base.gray_SubTitle};
    display: flex;
    font-size: 1.87rem;
  }
`;

export interface IUserToggleButtonProps {}

export default function UserToggleButton(props: IUserToggleButtonProps) {
  return (
    <UserToggleButtonBlock>
      <div className="menu">
        <FiMenu />
      </div>
      <div className="user">
        <FaUserCircle />
      </div>
    </UserToggleButtonBlock>
  );
}
