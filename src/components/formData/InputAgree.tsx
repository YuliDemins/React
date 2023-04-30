import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import './formdata.css';

export const InputAgree = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={'form-checkbox'}>
      <label>
        <input
          className={'form-agree'}
          type="checkbox"
          {...register('agree', { required: true })}
        />
        agree
      </label>
      {errors.agree && <span className={'form-error'}>{ErrorName.agree}</span>}
    </div>
  );
};
