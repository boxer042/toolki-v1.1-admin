import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../modules/baseSlice';

export default function useModalWithData(
  defaultVisible: boolean,
  defaultSelected: any | null,
) {
  const [visible, setVisible] = useState(defaultVisible);
  const [selected, setSelected] = useState<object | null>(defaultSelected);
  const dispatch = useDispatch();
  // const setModalState = (state: boolean) => {
  //   setVisible(state);
  //   if (state === false) {
  //     setSelected(null);
  //   }
  // };
  const onOpen = useCallback(() => {
    dispatch(openModal());
    setVisible(true);
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(closeModal());
    setVisible(false);
    setSelected(null);
  }, [dispatch]);

  return [visible, selected, setSelected, onOpen, onClose] as [
    boolean,
    any,
    typeof setSelected,
    typeof onOpen,
    typeof onClose,
  ];
}
