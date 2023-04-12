import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './formdata.module.css';
import { IFormData, IFormValues } from '../../types/types';
import { InputName } from './InputName';
import { InputCountry } from './InputCountry';
import { InputBirthday } from './InputBirthday';
import { InputFile } from './InputFile';
import { InputGender } from './InputGender';
import { InputAgree } from './InputAgree';
import { useAppDispatch } from '../../hooks/hooks';
import { addValue, setShowModal } from '../../store/formListSlice';

export const FormData: FC = () => {
  const methods = useForm<IFormValues>();
  const { reset } = methods;

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    dispatch(setShowModal(true));

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
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <InputName />
        <InputCountry />
        <InputBirthday />
        <InputFile />
        <InputGender />
        <InputAgree />
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </FormProvider>
  );
};
