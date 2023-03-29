import { FC } from 'react';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import './formdata.css';
import { IFormData, IFormValues } from '../../types/types';
import { InputName } from './InputName';
import { InputCountry } from './InputCountry';
import { InputBirthday } from './InputBirthday';
import { InputFile } from './InputFile';
import { InputGender } from './InputGender';
import { InputAgree } from './InputAgree';

type DataProps = {
  showCardsValues: (data: IFormData) => void;
  showModal: (value: boolean) => void;
};

export const FormData: FC<DataProps> = ({ showCardsValues, showModal }) => {
  const methods = useForm<IFormValues>();
  const { reset } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    showModal(true);

    const cardValues = {
      id: data.name,
      name: data.name,
      country: data.country,
      birthday: data.birthday,
      image: URL.createObjectURL(data.image[0]),
      gender: data.gender,
      agree: data.agree,
    };

    showCardsValues(cardValues);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <InputName />
        <InputCountry />
        <InputBirthday />
        <InputFile />
        <InputGender />
        <InputAgree />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
