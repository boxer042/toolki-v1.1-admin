import * as React from 'react';
import Button from '../components/button/Button';
import RoundButton from '../components/button/RoundButton';
import EllipseButton from '../components/button/EllipseButton';
import { FiUsers } from 'react-icons/fi';

export interface IComponentPageProps {}

export default function ComponentPage(props: IComponentPageProps) {
  return (
    <>
      <br />
      <div>
        <Button>기본 버튼</Button>
        <Button size="small">Size Small</Button>
        <Button size="large">Large Small</Button>
        <Button color="white">White Space</Button>
        <Button color="red">Red Danger</Button>
        <Button color="white" outlined>
          Out Line Button
        </Button>
        <Button disabled>Disabled Button</Button>
      </div>
      <div>
        <Button fullWidths size="large">
          Full Width Button
        </Button>
      </div>
      <div>
        <RoundButton size="small">
          <FiUsers />
        </RoundButton>
        <RoundButton>
          <FiUsers />
        </RoundButton>
        <RoundButton size="large">
          <FiUsers />
        </RoundButton>
        <RoundButton color="red">
          <FiUsers />
        </RoundButton>
        <RoundButton color="white">
          <FiUsers />
        </RoundButton>
        <RoundButton color="white" outlined>
          <FiUsers />
        </RoundButton>
        <RoundButton disabled>
          <FiUsers />
        </RoundButton>
      </div>

      <EllipseButton>타원 버튼</EllipseButton>
    </>
  );
}
