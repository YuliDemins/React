import { FC, useState } from 'react';
import { FormValue } from '../formValue/FormValue';

import { useForm } from 'react-hook-form';

import './formdata.css';
import { ValueList } from '../valueList/ValueList';
import { Modal } from '../modal/Modal';

enum ErrorName {
  field = 'This field is required',
  name = 'The first letter must be capitalized and more 1 letter',
  country = 'Choose the country',
  birthday = 'Choose the correct date',
  image = 'Choose the file .png, .jpg or .webp',
  gender = 'Choose the gender',
  agree = 'must be chosen',
}

enum Countries {
  Russia = 'Russia',
  Spain = 'Spain',
  France = 'France',
}
interface FormValues {
  id: string;
  name: string;
  country: Countries;
  birthday: string;
  image: FileList;
  gender: string;
  agree: boolean;
}

export const FormData: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [components, setComponents] = useState<FormValues[]>([]);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    setIsFormValid(true);
    setComponents([...components, { ...data }]);
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <label>
            Name:
            <input
              className="input"
              placeholder="Name"
              {...register('name', {
                required: ErrorName.field,
                pattern: {
                  value: /^[А-ЯЁA-Z][а-яёa-z]+$/,
                  message: ErrorName.name,
                },
                minLength: 2,
              })}
            />
          </label>
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="country">
          <label>
            country:
            <select className="input" {...register('country', { required: true })} defaultValue="">
              <option value="" disabled>
                choose the country...
              </option>
              <option value="Russia">{Countries.Russia}</option>
              <option value="Spain">{Countries.Spain}</option>
              <option value="France">{Countries.France}</option>
            </select>
          </label>
          {errors.country && <span className="error">{ErrorName.country}</span>}
        </div>
        <div className="birthday">
          <label>
            birthday:
            <input
              className="input"
              type="date"
              {...register('birthday', {
                required: true,
                validate: (value) => value < new Date().toISOString().split('T')[0],
              })}
            />
          </label>
          {errors.birthday && <span className="error">{ErrorName.birthday}</span>}
        </div>
        <div className="file">
          <label>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.webp"
              {...register('image', {
                required: true,
              })}
            />
          </label>
          {errors.image && <div className="error">{ErrorName.image}</div>}
        </div>
        <div className="gender">
          <div className="switcher">
            <label>
              <input
                type="radio"
                value="male"
                className="switcher-input"
                {...register('gender', { required: true })}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                className="switcher-input"
                {...register('gender', { required: true })}
              />
              Female
            </label>
          </div>
          {errors.gender && <span className="error">{ErrorName.gender}</span>}
        </div>
        <div className="checkbox">
          <label>
            <input className="agree" type="checkbox" {...register('agree', { required: true })} />
            agree
          </label>
          {errors.agree && <span className="error">{ErrorName.agree}</span>}
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      {isFormValid && <Modal setIsFormValid={setIsFormValid} />}
      <ValueList>
        {components
          ? components.map((component, index) => (
              <li key={index}>
                <FormValue
                  values={{
                    id: component.name,
                    imageValue: URL.createObjectURL(component.image[0]),
                    nameValue: component.name,
                    countryValue: component.country,
                    birthdayValue: component.birthday,
                    genderValue: component.gender,
                    agree: component.agree,
                  }}
                />
              </li>
            ))
          : null}
      </ValueList>
    </>
  );
};
