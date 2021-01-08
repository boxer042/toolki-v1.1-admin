import React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../foundations/base';

const ButtonBlock = styled.button<{
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
  border-radius: 4px;
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
    cursor: not-allowed;
    text-decoration: line-through;
  }

  ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.5rem;
      padding-left: 0.95rem;
      padding-right: 0.95rem;
      font-size: 0.75rem;
    `};
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `};
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.125rem;
      padding-left: 1.125rem;
      padding-right: 1.125rem;
      & + & {
        margin-left: 0.875rem;
      }
    `};

  ${(props) =>
    props.fullWidths &&
    css`
      width: 100%;
      & + & {
        margin-left: 0;
      }
    `};

  ${(props) =>
    props.outlined &&
    css`
      border: 1px solid ${buttonColorMap[props.color].color};
    `}
`;

export type TButtonType = 'button' | 'submit' | 'reset';
export type TColorType = 'primary' | 'white' | 'red';
export type TSizeType = 'small' | 'medium' | 'large';

// extends ButtonHTMLAttributes<HTMLButtonElement>
export interface IButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  children: React.ReactNode;
  color?: TColorType;
  size?: TSizeType;
  type?: TButtonType;
  onClick?: () => void;
  fullWidths?: boolean;
  outlined?: boolean;
}

export default function Button({
  children,
  color = 'primary',
  size = 'medium',
  type,
  onClick,
  fullWidths = false,
  outlined = false,
  ...rest
}: IButtonProps) {
  const htmlProps = rest as any;
  return (
    <ButtonBlock
      color={color}
      size={size}
      fullWidths={fullWidths}
      outlined={outlined}
      onClick={onClick}
      {...htmlProps}
    >
      {children}
    </ButtonBlock>
  );
}
