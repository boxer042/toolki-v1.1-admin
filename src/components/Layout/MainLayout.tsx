import React, { useState } from 'react';
import Header from '../header/Haeder';
import Sidebar from '../sidebar/Sidebar';
import styled from 'styled-components';
import { font } from './../../lib/styles/font';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div<{ side: boolean }>`
  position: relative;
  margin: 3rem 0 0 0;
  padding: 0 1rem;
  font-size: ${font.normal};
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    margin: calc(3rem + 1rem) 0 0 0;
    padding-left: ${(props) =>
      props.side ? `calc(68px + 2rem)` : `calc(68px + 188px)`};
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
