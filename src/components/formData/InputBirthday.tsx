import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import './formdata.css';

export const InputBirthday = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={'form-birthday'}>
      <label>
        birthday:
        <input
          className={'form-input'}
          type="date"
          {...register('birthday', {
            required: true,
            validate: (value) => value < new Date().toISOString().split('T')[0],
          })}
        />
      </label>
      {errors.birthday && <span className={'form-error'}>{ErrorName.birthday}</span>}
    </div>
  );
};
