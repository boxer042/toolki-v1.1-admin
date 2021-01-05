import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../modules/baseSlice';

export default function useModal(defaultVisible: boolean) {
  const [visible, setVisible] = useState(defaultVisible);
  const dispatch = useDispatch();

  const onOpen = useCallback(() => {
    dispatch(openModal());
    setVisible(true);
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(closeModal());
    setVisible(false);
  }, [dispatch]);

  return [visible, onOpen, onClose] as [boolean, typeof onOpen, typeof onClose];
}
