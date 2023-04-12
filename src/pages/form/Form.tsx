import { useEffect } from 'react';
import { FormData } from '../../components/formData/FormData';
import { Modal } from '../../components/modal/Modal';
import { ValueList } from '../../components/valueList/ValueList';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { setShowModal } from '../../store/formListSlice';
import { RootState } from '../../store/store';

export const Form = () => {
  const dispatch = useAppDispatch();
  const { isShowModal } = useTypedSelector((state: RootState) => state.formList);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setShowModal(false));
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [isShowModal]);

  return (
    <>
      <h1 className="main-title">Form</h1>
      <FormData />
      {isShowModal && <Modal />}
      <ValueList />
    </>
  );
};
