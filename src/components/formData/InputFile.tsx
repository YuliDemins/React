import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';

export const InputFile = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
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
  );
};
