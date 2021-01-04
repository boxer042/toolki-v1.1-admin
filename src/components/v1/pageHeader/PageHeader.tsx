import React from 'react';
import styled from 'styled-components';
import { palette } from '../../../lib/styles/palette1';
import { zIndexes } from '../../../lib/styles/zIndexes';
import Button from '../common/Button';
import { FaAngleLeft } from 'react-icons/fa';

export interface IPageHeaderProps {
  pageTitle: string;
  children: React.ReactNode;
  buttons?: {
    label: string;
    color: string;
    onClick: () => void;
  }[];
}

const PageHeaderWrapper = styled.div`
  /* position: sticky; */
  display: flex;
  align-items: center;
  background-color: ${palette.baseBackground};
  height: 4rem;
  /* top: 3rem; */
  padding: 0 1rem;
  z-index: ${zIndexes.header};
  transition: 0.5s;
  justify-content: space-between;
`;

const Start = styled.div`
  display: flex;
`;
const BackArrow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${palette.baseFontHoverAndActive};
  }
`;
const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const PageContents = styled.div`
  margin: 1rem 1rem;
`;

export default function PageHeader({
  pageTitle,
  children,
  buttons,
}: IPageHeaderProps) {
  return (
    <>
      <PageHeaderWrapper>
        <Start>
          <BackArrow>
            <FaAngleLeft />
          </BackArrow>
          <PageTitle>{pageTitle}</PageTitle>
        </Start>
        <div>
          {buttons
            ? buttons.map((item: any, index: number) => (
                <Button key={index} color={item.color} onClick={item.onClick}>
                  {item.label}
                </Button>
              ))
            : null}
        </div>
      </PageHeaderWrapper>
      <PageContents>{children}</PageContents>
    </>
  );
}
