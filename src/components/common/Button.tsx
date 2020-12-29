import * as React from 'react';
import styled from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

type ColorType = 'red' | 'gray';
type ButtonSize = 'medium' | 'large';

export interface IButtonProps {
  color?: ColorType;
  children: string;
  size?: ButtonSize;
  onClick: () => void;
}

const ButtonBlock = styled.button<{ color: ColorType }>`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0 1rem 0 1rem;
  height: 2.25rem;
  color: ${(props) => buttonColorMap[props.color].color};
  background-color: ${(props) => buttonColorMap[props.color].background};
  & + & {
    margin-left: 0.5rem;
  }
`;

export default function Button({
  children,
  color = 'red',
  onClick,
}: IButtonProps) {
  return (
    <ButtonBlock color={color} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}
