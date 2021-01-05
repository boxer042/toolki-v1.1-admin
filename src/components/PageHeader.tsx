import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import styled from 'styled-components';
import { base } from './../foundations/base';
import Button from './Button';
import { layer } from './../foundations/layer';
import { RootState } from '../modules';
import { useSelector } from 'react-redux';
import { TColorType } from '../components/Button';

const PageHeaderBlock = styled.div`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid ${base.gray_Line};
  padding: 0 1rem;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  left: 0;
  top: calc(${layer.header} + ${layer.nav});
  /* box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.09); */
  @media (max-width: 743px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;
const Start = styled.div`
  display: flex;
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 0 1rem 0 0;
`;
const PageTitle = styled.h2`
  display: flex;
  align-items: center;
`;

type TButton = {
  label: string;
  color: TColorType;
  onClick: () => void;
};
export interface IPageHeaderProps {
  title: string;
  buttons?: TButton[];
}

export default function PageHeader({ title, buttons }: IPageHeaderProps) {
  const { header } = useSelector((state: RootState) => state.base);
  return (
    <PageHeaderBlock>
      <Start>
        {!header && (
          <BackButton>
            <FiChevronLeft />
          </BackButton>
        )}
        <PageTitle>{title}</PageTitle>
      </Start>
      <div>
        {buttons
          ? buttons.map((button: TButton, index: number) => (
              <Button key={index} color={button.color} onClick={button.onClick}>
                {button.label}
              </Button>
            ))
          : undefined}
      </div>
    </PageHeaderBlock>
  );
}
