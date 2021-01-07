import React, { useEffect, useCallback } from 'react';
import {
  FiBookmark,
  FiMapPin,
  FiPhone,
  FiPrinter,
  FiSmartphone,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import styled from 'styled-components';
import Input from '../../components/Input';
import Select from '../../components/Select';

const CreateAccountBlock = styled.div``;

export type TInputs = {
  name: string;
  address: string;
  office: string;
  fax: string;
  manager: string;
  position: string;
  mobile: string;
  businessNumber: string;
  ceo: string;
};

export interface ICreateAccountProps {
  inputs: TInputs;
  setInputs: React.Dispatch<React.SetStateAction<TInputs>>;
  errors?: any;
  submited: boolean;
  setSubmited: React.Dispatch<React.SetStateAction<boolean>>;
  onAction: () => void;
}

export default function CreateAccount({
  inputs,
  setInputs,
  errors,
  submited,
  setSubmited,
  onAction,
}: ICreateAccountProps) {
  // const [inputs, setInputs] = useState({
  //   name: '',
  //   address: '',
  //   office: '',
  //   fax: '',
  //   manager: '',
  //   position: '',
  //   mobile: '',
  //   bizNumber: '',
  //   ceo: '',
  // });
  // const [dataTest, setDataTest] = useState({});

  const {
    name,
    address,
    office,
    fax,
    manager,
    position,
    mobile,
    businessNumber,
    ceo,
  } = inputs;

  useEffect(() => {
    if (submited) {
      if (Object.keys(errors).length === 0) {
        onAction();
      }
      setSubmited(false);
    }
  }, [errors, submited, setSubmited, onAction]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs, // 기존의 input 객체 복사
        [name]: value, // name키를 가진값을 value로 설정
      });
    },
    [inputs, setInputs],
  );

  const onSelected = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs, setInputs],
  );

  return (
    <CreateAccountBlock>
      <Input
        name="name"
        label="거래처명"
        value={name}
        placeholder="거래처명"
        icon={<FiUsers />}
        required
        onChange={onChange}
        error={errors.name}
      />
      <Input
        name="address"
        label="거래처 주소"
        value={address}
        placeholder="거래처 주소"
        icon={<FiMapPin />}
        onChange={onChange}
      />
      <Input
        name="office"
        label="전화번호"
        value={office}
        placeholder="전화번호"
        icon={<FiPhone />}
        onChange={onChange}
        error={errors.office}
      />
      <Input
        name="fax"
        label="팩스"
        value={fax}
        placeholder="팩스"
        icon={<FiPrinter />}
        onChange={onChange}
      />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '0.5rem' }}>
          <Input
            name="manager"
            label="담당자명"
            value={manager}
            placeholder="담당자명"
            icon={<FiUser />}
            onChange={onChange}
          />
        </div>
        <div style={{ flex: '1', marginLeft: '0.5rem' }}>
          <Select
            name="position"
            label="담당자 직급"
            value={position}
            optionLabel="담당자 직급"
            options={['대표', '이사', '부장', '차장', '과장', '대리', '사원']}
            onSelected={onSelected}
          />
        </div>
      </div>
      <Input
        name="mobile"
        label="담당자 전화번호"
        value={mobile}
        placeholder="담당자 전화번호"
        icon={<FiSmartphone />}
        onChange={onChange}
      />
      <Input
        name="businessNumber"
        label="사업자등록번호"
        value={businessNumber}
        placeholder="사업자등록번호"
        icon={<FiBookmark />}
        onChange={onChange}
      />
      <Input
        name="ceo"
        label="사업자 대표"
        value={ceo}
        placeholder="시업자 대표"
        icon={<FiUser />}
        onChange={onChange}
      />
    </CreateAccountBlock>
  );
}
