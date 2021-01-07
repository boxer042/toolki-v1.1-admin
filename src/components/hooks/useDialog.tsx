import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useDialog(defaultVisible: boolean) {
  const [visible, setVisible] = useState(defaultVisible);

  const toggle = () => setVisible(!visible);
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return [visible, open, close] as [boolean, typeof open, typeof close];
}
