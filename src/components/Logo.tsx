import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { SiAppsignal } from 'react-icons/si';
import { base } from './../foundations/base';
import { RiAncientGateFill } from 'react-icons/ri';
import breakPoint from './../foundations/breakPoint';
import { FiMoon } from 'react-icons/fi';

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
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  @media (max-width: 743px) {
    display: none;
  }
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
            <FiMoon />
          </Icon>
          <Title>toolki</Title>
        </Link>
      ) : (
        <>
          <Icon>
            <FiMoon />
          </Icon>
          <Title>toolki</Title>
        </>
      )}
    </LogoBlock>
  );
}
