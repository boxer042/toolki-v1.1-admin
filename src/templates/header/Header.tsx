import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import Logo from '../../components/Logo';
import UserToggleButton from '../user/UserToggleButton';
import GlobalSearch from '../../components/search/GlobalSearch';
import { isHeader } from '../../modules/baseSlice';
import { RootState } from '../../modules';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: white;
  padding: 1rem;
  border-bottom: 1px solid ${base.gray_Line};
  @media (min-width: 744px) {
  }
`;

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  const { header } = useSelector((state: RootState) => state.base);
  const dispatch = useDispatch();

  useEffect(() => {
    const pathname = window.location.pathname;
    const media: MediaQueryList = window.matchMedia('(min-width: 744px)');
    const listener = () => {
      dispatch(isHeader(media.matches));
    };
    if (pathname !== '/') {
      if (media.matches !== header) {
        dispatch(isHeader(media.matches));
      }
      media.addListener(listener);
    }
    return () => {
      media.removeListener(listener);
    };
  }, [header, dispatch]);

  return (
    <>
      {header ? (
        <HeaderBlock>
          <Logo link="/" />
          <GlobalSearch />
          <UserToggleButton />
        </HeaderBlock>
      ) : undefined}
    </>
  );
}
