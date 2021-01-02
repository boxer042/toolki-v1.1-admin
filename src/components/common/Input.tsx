import React from 'react';
import styled from 'styled-components';
import { palette } from '../../lib/styles/palette';

const InputBlock = styled.div`
  margin-top: 1.75rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Label = styled.div`
  margin: 0.5rem 0.5rem;
  display: flex;
`;

const Required = styled.div`
  color: #c92a2a;
  font-weight: 600;
  margin-left: 0.25rem;
`;

const Error = styled.div`
  margin: 0.5rem 0.5rem;
  color: #c92a2a;
  font-weight: 600;
`;

const Inputed = styled.input`
  padding: 0.75rem 2.35rem 0.75rem 0.75rem;
  border: 1px solid ${palette.baseLine};
  border-radius: 4px;
  font-size: 1.125rem;
  width: 100%;
  &:focus {
    border: 1px solid #12b886;
  }
  &::placeholder {
    color: ${palette.subFontColor};
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  font-size: 2.5rem;
  font-size: 1.125rem;
  color: ${palette.subFontColor};
`;

export interface IInputProps {
  reactIcon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  type?: string;
}

export default function Input({
  reactIcon,
  placeholder,
  label,
  error,
  required,
  type,
}: IInputProps) {
  return (
    <InputBlock>
      <Label>
        {label}
        {required ? <Required>*</Required> : undefined}
      </Label>
      <InputGroup>
        <Inputed placeholder={placeholder} type={type} />
        <Icon>{reactIcon}</Icon>
      </InputGroup>
      {error ? <Error>{error}</Error> : undefined}
    </InputBlock>
  );
}
