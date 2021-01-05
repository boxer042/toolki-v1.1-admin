import React, { useEffect } from 'react';
import styled from 'styled-components';
import { zindex } from './../foundations/zindex';

const OpaqueLayerBlock = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);
  z-index: ${zindex.OpaqueLayer};
`;
// TODO: 애니메이션 넣기
// useEffect로 새로고침시 활성화여부 만들어야하는듯?
// BUG 우측으로 밀리는거
export interface IOpaqueLayerProps {
  visible: boolean;
}

export default function OpaqueLayer({ visible }: IOpaqueLayerProps) {
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';
  }, [visible]);

  if (!visible) return null;
  return <OpaqueLayerBlock visible={visible} />;
}
