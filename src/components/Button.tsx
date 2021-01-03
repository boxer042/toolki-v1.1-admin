import React from 'react';
import styled, { css } from 'styled-components';
import { base } from './../foundations/base';

const ButtonBlock = styled.button<{ shape: TShapeType; size: TSizeType }>`
  // 기본 버튼 속성
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  color: white;
  background-color: ${base.primary};
  border-radius: 7px;
  ${(props) => {
    if (props.shape === 'round') {
      if (props.size === 'small') {
        return `
          width: 24px;
          height: 24px;
          border-radius: 50%;
        `;
      } else if (props.size === 'large') {
        return `
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          font-size: 1.125rem;
        `;
      } else {
        return `
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          font-size: 1rem;
        `;
      }
    } else if (props.shape === 'ellipse') {
      if (props.size === 'small') {
        return ``;
      } else if (props.size === 'large') {
        return `
          border-radius: 21px;
          padding: 5px 5px 5px 12px;
          height: 2.625rem;
          width: 77px;
        `;
      } else {
        return `
          border-radius: 21px;
          height: 2rem;
        `;
      }
    } else {
      if (props.size === 'small') {
        return ``;
      } else if (props.size === 'large') {
        return `
          height: 3rem;
          font-size: 1.125rem;
          padding-left: 1.125rem;
          padding-right: 1.125rem;
          & + & {
            margin-left: 0.875rem;
          }
        `;
      } else if (props.size === 'max') {
        return `
          width: 100%;
          height: 3rem;
          font-size: 1.125rem;
        `;
      } else {
        // default
        return `
          font-size: 1rem;
          height: 2rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        `;
      }
    }
  }}

  & + & {
    margin-left: 0.5rem;
  }
`;

type TColorType = 'primary' | 'secondary' | 'red';
type TShapeType = 'default' | 'round' | 'ellipse';
type TSizeType = 'small' | 'medium' | 'large' | 'max';

export interface IButtonProps {
  children: React.ReactNode;
  shape?: TShapeType;
  color?: TColorType;
  size?: TSizeType;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  children,
  shape = 'default',
  color = 'primary',
  size = 'medium',
  icon,
}: IButtonProps) {
  return (
    <ButtonBlock shape={shape} size={size}>
      {children}
    </ButtonBlock>
  );
}
