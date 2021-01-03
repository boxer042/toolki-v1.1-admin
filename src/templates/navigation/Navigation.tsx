import * as React from 'react';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import media from '../../foundations/media';

const NavigationBlock = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 5rem;
  width: 100%;
  border-top: 1px solid ${base.gray_Line};
  background-color: white;
  @media (min-width: 744px) {
    position: sticky;
    position: -webkit-sticky;
    top: 5rem;
    left: 0;
    border-bottom: 1px solid ${base.gray_Line};
  }
`;
export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
  return (
    <NavigationBlock>대표 메뉴 위치 743까지 아래 744부터 위</NavigationBlock>
  );
}
