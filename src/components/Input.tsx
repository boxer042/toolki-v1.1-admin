import React from 'react';
import styled from 'styled-components';
import { palette } from './../foundations/palette';
import { base } from './../foundations/base';

const InputBlock = styled.div`
  margin-top: 1rem;
  width: 100%;

  /* margin: 0.75rem; */
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputWrapper = styled.input`
  padding: 0.75rem 2.35rem 0.75rem 0.75rem;
  border: 1px solid ${base.gray_Line};
  border-radius: 4px;
  font-size: 1.125rem;
  width: 100%;
  &:focus {
    border: 1px solid ${base.primary};
  }
  &::placeholder {
    color: ${base.gray_Line};
  }
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

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  font-size: 1.125rem;
  color: ${base.gray_SubTitle};
`;

export interface IInputProps {
  icon?: React.ReactNode;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export default function Input({
  icon,
  placeholder,
  label,
  error,
  required,
  type,
  value,
  name,
  onChange,
}: IInputProps) {
  return (
    <InputBlock>
      <Label>
        {label}
        {required ? <Required>*</Required> : undefined}
      </Label>
      <InputGroup>
        <InputWrapper
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
        <Icon>{icon}</Icon>
      </InputGroup>
      {error ? <Error>{error}</Error> : undefined}
    </InputBlock>
  );
}
