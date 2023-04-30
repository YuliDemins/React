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
import { useAppDispatch } from '../../hooks/hooks';
import { addValue, showModal } from '../../store/formListSlice';
import React from 'react';

export const FormData: FC = () => {
  const methods = useForm<IFormValues>();
  const { reset } = methods;

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    dispatch(showModal(true));

    const cardValues: IFormData = {
      id: data.name,
      name: data.name,
      country: data.country,
      birthday: data.birthday,
      image: URL.createObjectURL(data.image[0]),
      gender: data.gender,
      agree: data.agree,
    };
    dispatch(addValue(cardValues));
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={'form'} onSubmit={methods.handleSubmit(onSubmit)}>
        <InputName />
        <InputCountry />
        <InputBirthday />
        <InputFile />
        <InputGender />
        <InputAgree />
        <button type="submit" className={'form-submit'}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
