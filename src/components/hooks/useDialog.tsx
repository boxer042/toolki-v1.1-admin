import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useDialog(defaultVisible: boolean) {
  const [visible, setVisible] = useState(defaultVisible);

  const toggle = () => setVisible(!visible);

  return [visible, toggle] as [boolean, typeof toggle];
}
