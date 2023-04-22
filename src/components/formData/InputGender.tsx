import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import './formdata.css';

export const InputGender = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={'form-gender'}>
      <div className={'form-switcher'}>
        <label>
          <input
            type="radio"
            value="male"
            className={'switcher-input'}
            {...register('gender', { required: true })}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            className={'switcher-input'}
            {...register('gender', { required: true })}
          />
          Female
        </label>
      </div>
      {errors.gender && <span className={'form-error'}>{ErrorName.gender}</span>}
    </div>
  );
};
