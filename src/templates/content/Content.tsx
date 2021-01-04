import React from 'react';
import styled from 'styled-components';
import breakPoint from './../../foundations/breakPoint';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const ContentBlock = styled.div<{ header: boolean }>`
  width: 100%;
  padding-top: ${(props) => (props.header ? '5rem' : undefined)};
  padding-bottom: 5rem;
  ${breakPoint} {
    padding-top: 10rem;
    height: 100%;
  }
`;

export interface IContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: IContentProps) {
  const { header } = useSelector((state: RootState) => state.base);
  return <ContentBlock header={header}>{children}</ContentBlock>;
}
