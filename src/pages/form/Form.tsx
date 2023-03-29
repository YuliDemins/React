import { useState } from 'react';
import { FormData } from '../../components/formData/FormData';
import { ValueList } from '../../components/valueList/ValueList';
import { IFormData } from '../../types/types';

export const Form = () => {
  const [card, setCard] = useState<IFormData[]>([]);

  const showCardsValues = (values: IFormData) => {
    setCard((prev) => [...prev, values]);
  };

  return (
    <>
      <h1 className="main-title">Form</h1>
      <FormData showCardsValues={showCardsValues} />
      <ValueList list={card} />
    </>
  );
};
