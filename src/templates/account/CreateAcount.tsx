import React, { useCallback } from 'react';
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
  bizNumber: string;
  ceo: string;
};

export interface ICreateAccountProps {
  inputs: TInputs;
  setInputs: React.Dispatch<React.SetStateAction<TInputs>>;
}

export default function CreateAccount({
  inputs,
  setInputs,
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
    bizNumber,
    ceo,
  } = inputs;

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
      />
      <Input
        name="address"
        label="거래처 주소"
        placeholder="거래처 주소"
        icon={<FiMapPin />}
      />
      <Input
        name="office"
        label="전화번호"
        placeholder="전화번호"
        icon={<FiPhone />}
      />
      <Input name="fax" label="팩스" placeholder="팩스" icon={<FiPrinter />} />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '0.5rem' }}>
          <Input
            name="manager"
            label="담당자명"
            placeholder="담당자명"
            icon={<FiUser />}
          />
        </div>
        <div style={{ flex: '1', marginLeft: '0.5rem' }}>
          <Select
            name="position"
            label="담당자 직급"
            optionLabel="담당자 직급"
            options={['대표', '이사', '부장', '차장', '과장', '대리', '사원']}
            onSelected={onSelected}
          />
        </div>
      </div>
      <Input
        name="mobile"
        label="담당자 전화번호"
        placeholder="담당자 전화번호"
        icon={<FiSmartphone />}
      />
      <Input
        name="BizNumber"
        label="사업자등록번호"
        placeholder="사업자등록번호"
        icon={<FiBookmark />}
      />
      <Input
        name="ceo"
        label="사업자 대표"
        placeholder="시업자 대표"
        icon={<FiUser />}
      />
    </CreateAccountBlock>
  );
}
