import React from 'react';
import styled from 'styled-components';
import breakPoint from './../../foundations/breakPoint';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { layer } from './../../foundations/layer';

const ContentBlock = styled.div<{ header: boolean }>`
  width: 100%;
  padding-top: ${(props) => (props.header ? `${layer.header}` : `${layer.nav}`)};
  padding-bottom: ${layer.nav};
  ${breakPoint} {
    padding-top: calc(${layer.header} + ${layer.nav});
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
