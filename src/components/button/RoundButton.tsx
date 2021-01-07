import * as React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../foundations/base';
import { TButtonType, TColorType, TSizeType } from './Button';

const RoundButtonBlock = styled.button<{
  color: TColorType;
  size: TSizeType;
  fullWidths: boolean;
  outlined: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  outline: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  color: ${(props) => buttonColorMap[props.color].color};
  background-color: ${(props) => buttonColorMap[props.color].background};
  &:hover,
  &:focus {
    background: ${(props) => buttonColorMap[props.color].hoverBackground};
  }
  & + & {
    margin-left: 0.5rem;
  }
  &:disabled {
    text-decoration: line-through;
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 24px;
      height: 24px;
      font-size: 0.75rem;
    `};
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2rem;
      width: 2rem;
      font-size: 1rem;
    `};
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      width: 3rem;
      font-size: 1.35rem;
    `};

  ${(props) =>
    props.outlined &&
    css`
      border: 1px solid ${buttonColorMap[props.color].color};
    `}
`;

export interface IRoundButtonProps {
  children: React.ReactNode;
  color?: TColorType;
  size?: TSizeType;
  type?: TButtonType;
  onClick?: () => void;
  disabled?: boolean;
  fullWidths?: boolean;
  outlined?: boolean;
}

export default function RoundButton({
  children,
  color = 'primary',
  size = 'medium',
  type,
  onClick,
  disabled,
  fullWidths = false,
  outlined = false,
}: IRoundButtonProps) {
  return (
    <RoundButtonBlock
      color={color}
      size={size}
      fullWidths={fullWidths}
      outlined={outlined}
      disabled={disabled}
    >
      {children}
    </RoundButtonBlock>
  );
}
