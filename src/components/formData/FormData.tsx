import { FC, useState } from 'react';
import { FormValue } from '../formValue/FormValue';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import './formdata.css';
import { ValueList } from '../valueList/ValueList';
import { Modal } from '../modal/Modal';
import { IFormValues, IFormData } from '../../types/types';
import { InputName } from './InputName';
import { InputCountry } from './InputCountry';
import { InputBirthday } from './InputBirthday';
import { InputFile } from './InputFile';
import { InputGender } from './InputGender';
import { InputAgree } from './InputAgree';

export const FormData: FC = () => {
  const methods = useForm<IFormValues>();
  const { reset } = methods;

  const [values, setValues] = useState<IFormData[]>([]);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    setIsFormValid(true);
    setValues([
      ...values,
      {
        id: data.name,
        name: data.name,
        country: data.country,
        birthday: data.birthday,
        image: URL.createObjectURL(data.image[0]),
        gender: data.gender,
        agree: data.agree,
      },
    ]);
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
      {isFormValid && <Modal setIsFormValid={setIsFormValid} />}
      <ValueList>
        {values
          ? values.map((value, index) => (
              <li key={index}>
                <FormValue
                  data={{
                    id: value.id,
                    name: value.name,
                    country: value.country,
                    birthday: value.birthday,
                    image: value.image,
                    gender: value.gender,
                    agree: value.agree,
                  }}
                />
              </li>
            ))
          : null}
      </ValueList>
    </FormProvider>
  );
};
