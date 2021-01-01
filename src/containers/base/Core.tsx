import * as React from 'react';
import OpaqueLayer from '../../components/common/OpaqueLayer';

export interface ICoreProps {}

export default function Core(props: ICoreProps) {
  return (
    <>
      <OpaqueLayer visible={true} />
    </>
  );
}
