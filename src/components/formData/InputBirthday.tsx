import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';

export const InputBirthday = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
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
  );
};
