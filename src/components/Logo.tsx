import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiAppsignal } from 'react-icons/si';
import { base } from './../foundations/base';

const LogoBlock = styled.div`
  display: flex;
  color: ${base.primary};
`;

const Link = styled(NavLink)`
  display: flex;
  color: ${base.primary};
`;

const Icon = styled.div`
  font-size: 1.8rem;
`;
const Title = styled.div`
  margin-left: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export interface ILogoProps {
  link?: string;
}

export default function Logo({ link }: ILogoProps) {
  return (
    <LogoBlock>
      {link ? (
        <Link to={link}>
          <Icon>
            <SiAppsignal />
          </Icon>
          <Title>toolki</Title>
        </Link>
      ) : (
        <>
          <Icon>
            <SiAppsignal />
          </Icon>
          <Title>toolki</Title>
        </>
      )}
    </LogoBlock>
  );
}
