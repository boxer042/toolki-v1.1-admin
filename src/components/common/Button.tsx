import * as React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

type ColorType = 'red' | 'gray';
type ButtonSize = 'medium' | 'large' | 'all' | 'small';

export interface IButtonProps {
  color?: ColorType;
  children: string;
  size?: ButtonSize;
  onClick?: () => void;
}

const ButtonBlock = styled.button<{ color: ColorType; size: ButtonSize }>`
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

  ${(props) =>
    props.size === 'all' &&
    css`
      width: 100%;
      height: 3rem;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.5rem;
      font-size: 0.75rem;
      padding-left: 0.95rem;
      padding-right: 0.95rem;
    `}
`;

//TODO: disabled 만들어야함
export default function Button({
  children,
  color = 'red',
  size = 'medium',
  onClick,
}: IButtonProps) {
  return (
    <ButtonBlock color={color} size={size} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}
