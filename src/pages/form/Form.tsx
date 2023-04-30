import React from 'react';
import { useEffect } from 'react';
import { FormData } from '../../components/formData/FormData';
import { Modal } from '../../components/modal/Modal';
import { ValueList } from '../../components/valueList/ValueList';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { showModal } from '../../store/formListSlice';
import { RootState } from '../../store/store';

export const Form = () => {
  const dispatch = useAppDispatch();
  const { isShowModal } = useTypedSelector((state: RootState) => state.formList);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isShowModal) {
        dispatch(showModal(false));
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch, isShowModal]);

  return (
    <>
      <h1 className="main-title">Form</h1>
      <FormData />
      {isShowModal && <Modal />}
      <ValueList />
    </>
  );
};
