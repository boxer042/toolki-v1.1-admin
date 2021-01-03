import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styled from 'styled-components';
import { palette } from '../../../lib/styles/palette1';

const SelectBlock = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const SelectGroup = styled.div`
  position: relative;
  /* padding: 0 0 0 0.5rem; */
`;

const SelectWrapper = styled.select`
  padding: 0.4rem 0 0 0.75rem;
  border: 1px solid ${palette.baseLine};
  font-size: 1.125rem;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  color: ${palette.baseFontColor};
  .select_label {
    color: ${palette.subFontColor};
  }
  &:focus {
    border: 1px solid #12b886;
  }
  -webkit-appearance: none; // arrow disabled
  appearance: none;
`;

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.75rem;
  font-size: 1.125rem;
  color: ${palette.subFontColor};
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

export interface ISelectProps {
  error?: string;
  label?: string;
  required?: boolean;
  options: string[];
  optionLabel: string;
  name?: string;
  onSelected?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
}

export default function Select({
  error,
  label,
  required,
  options,
  optionLabel,
  name,
  value,
  onSelected,
}: ISelectProps) {
  return (
    <SelectBlock>
      <Label>
        {label}
        {required ? <Required>*</Required> : undefined}
      </Label>
      <SelectGroup>
        <SelectWrapper value={value} name={name} onChange={onSelected}>
          <option className="select_label" value="">
            {optionLabel}
          </option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </SelectWrapper>
        <Icon>
          <FiChevronDown />
        </Icon>
      </SelectGroup>

      {error ? <Error>{error}</Error> : undefined}
    </SelectBlock>
  );
}
