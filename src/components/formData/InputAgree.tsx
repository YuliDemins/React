import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';

export const InputAgree = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="checkbox">
      <label>
        <input className="agree" type="checkbox" {...register('agree', { required: true })} />
        agree
      </label>
      {errors.agree && <span className="error">{ErrorName.agree}</span>}
    </div>
  );
};
