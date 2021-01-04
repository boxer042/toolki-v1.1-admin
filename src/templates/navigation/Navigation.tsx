import React, { useEffect } from 'react';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import useMediaQuery from './../../components/hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { isFooter } from '../../modules/baseSlice';
import { RootState } from '../../modules';
import { FiHome, FiSettings, FiShoppingBag, FiUsers } from 'react-icons/fi';

const NavigationBlock = styled.div`
  position: fixed;
  left: 0;
  top: 5rem;
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid ${base.gray_Line};
  background-color: white;
  font-size: 1.5rem;
`;

const FooterBlock = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 5rem;
  border-top: 1px solid ${base.gray_Line};
  background-color: white;
`;
export interface INavigationProps {}

export default function Navigation(props: INavigationProps) {
  const { footer } = useSelector((state: RootState) => state.base);
  const dispatch = useDispatch();
  const useFooter = useMediaQuery('(max-width: 743px)');

  useEffect(() => {
    dispatch(isFooter(useFooter));
  }, [dispatch, useFooter]);

  return (
    <>
      {footer ? (
        <FooterBlock>모바일 푸터</FooterBlock>
      ) : (
        <NavigationBlock>
          <FiHome /> 홈
          <FiShoppingBag />
          판매내역
          <FiUsers /> 고객
          <FiSettings /> 설정
        </NavigationBlock>
      )}
    </>
  );
}

/**
 * airbnb는 65px이네
 * rgb 176 176 176 icon 크기는 30 우리의 돋보기랑같은크기네
 */
