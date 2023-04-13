import { useState, useEffect } from 'react';
import { FormData } from '../../components/formData/FormData';
import { Modal } from '../../components/modal/Modal';
import { ValueList } from '../../components/valueList/ValueList';
import { IFormData } from '../../types/types';

export const Form = () => {
  const [card, setCard] = useState<IFormData[]>([]);
  const [showModal, setShowModal] = useState(false);

  const showCardsValues = (values: IFormData) => {
    setCard((prev) => [...prev, values]);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowModal(false);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [showModal]);

  return (
    <>
      <h1 className="main-title">Form</h1>
      <FormData showCardsValues={showCardsValues} showModal={setShowModal} />
      {showModal && <Modal />}
      <ValueList list={card} />
    </>
  );
};
