import React from 'react';
import styled from 'styled-components';
import { TButtonType, TColorType, TSizeType } from './Button';

const EllipseButtonBlock = styled.button``;

export interface IEllipseButtonProps {
  children: React.ReactNode;
  color?: TColorType;
  size?: TSizeType;
  type?: TButtonType;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function EllipseButton({
  children,
  color = 'primary',
  size = 'medium',
  type,
  onClick,
  disabled,
  fullWidth,
}: IEllipseButtonProps) {
  return <EllipseButtonBlock>{children}</EllipseButtonBlock>;
}
