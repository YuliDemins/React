import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorName, IFormValues } from '../../types/types';
import './formdata.css';

export const InputName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  return (
    <div className={'form-name'}>
      <label>
        Name:
        <input
          className={'form-input'}
          placeholder="Name"
          {...register('name', {
            required: ErrorName.field,
            pattern: {
              value: /^[А-ЯЁA-Z][а-яёa-z\-]*$/,
              message: ErrorName.name,
            },
            minLength: 2,
          })}
        />
      </label>
      {errors.name && <span className={'form-error'}>{errors.name.message}</span>}
    </div>
  );
};
