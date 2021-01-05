import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import OpaqueLayer from '../../components/OpaqueLayer';

export interface ICoreProps {}

export default function Core(props: ICoreProps) {
  const { layer } = useSelector((state: RootState) => state.base);
  return (
    <>
      <OpaqueLayer visible={layer} />
    </>
  );
}
