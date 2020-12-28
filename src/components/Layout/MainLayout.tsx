import React, { useState } from 'react';
import Header from '../header/Haeder';
import Sidebar from '../sidebar/Sidebar';
import styled from 'styled-components';
import { font } from './../../lib/styles/font';
import { layout } from './../../lib/styles/layout';
export interface IMainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<{ side: boolean }>`
  position: relative;
  margin: 5rem 0 0 0;
  padding: 0 1rem;
  font-size: ${font.normal};
  transition: 0.5s;
  padding-left: ${(props) =>
    props.side ? `calc(${layout.baseSidebarWidth} + 1rem)` : ''};
  @media screen and (min-width: 768px) {
    padding-left: ${(props) =>
      props.side
        ? `calc(${layout.baseSidebarWidth} + 2rem)`
        : `calc(${layout.baseSidebarWidth} + 168px + 2rem)`};
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
