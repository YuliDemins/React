import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import './formdata.css';

export const InputFile = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={'form-file'}>
      <label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.webp"
          {...register('image', {
            required: true,
            validate: (file) =>
              file[0].type == 'image/png' ||
              file[0].type == 'image/jpeg' ||
              file[0].type == 'image/webp',
          })}
        />
      </label>
      {errors.image && <div className={'form-error'}>{ErrorName.image}</div>}
    </div>
  );
};
