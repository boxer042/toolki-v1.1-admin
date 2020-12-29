import React, { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import styled from 'styled-components';
import { font } from './../../lib/styles/font';
import { layout } from './../../lib/styles/layout';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<{ side: boolean }>`
  position: relative;
  margin: 3rem 0 0 0;
  font-size: ${font.normal};
  transition: 0.5s;
  padding-left: ${(props) =>
    props.side ? `calc(${layout.baseSidebarWidth})` : ''};
  @media screen and (min-width: 768px) {
    padding-left: ${(props) =>
      props.side
        ? `calc(${layout.baseSidebarWidth})`
        : `calc(${layout.baseSidebarWidth} + 168px)`};
  }
`;

export default function MainLayout({ children }: IMainLayoutProps) {
  const [side, setSide] = useState(false);
  return (
    <Wrapper side={side}>
      <Header side={side} setSide={setSide} />
      <Sidebar side={side} />
      {children}
    </Wrapper>
  );
}
