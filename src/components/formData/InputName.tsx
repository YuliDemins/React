import { useFormContext } from 'react-hook-form';
import { ErrorName, IFormValues } from '../../types/types';

export const InputName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  return (
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
  );
};
