import React, { useEffect } from 'react';
import styled from 'styled-components';
import { base } from '../../foundations/base';
import useMediaQuery from './../../components/hooks/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { isFooter } from '../../modules/baseSlice';
import { RootState } from '../../modules';
import { layer } from './../../foundations/layer';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const NavigationBlock = styled.div`
  position: fixed;
  left: 0;
  top: 5rem;
  height: ${layer.nav};
  width: 100%;
  border-bottom: 1px solid ${base.gray_Line};
  background-color: white;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterBlock = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: ${layer.nav};
  border-top: 1px solid ${base.gray_Line};
  background-color: white;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <FooterBlock>
          <MobileNav />
        </FooterBlock>
      ) : (
        <NavigationBlock>
          <DesktopNav />
        </NavigationBlock>
      )}
    </>
  );
}

/**
 * airbnb는 65px이네
 * rgb 176 176 176 icon 크기는 30 우리의 돋보기랑같은크기네
 */
