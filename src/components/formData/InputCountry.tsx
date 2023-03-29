import { useFormContext } from 'react-hook-form';
import { Countries, ErrorName } from '../../types/types';

export const InputCountry = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="country">
      <label>
        country:
        <select className="input" {...register('country', { required: true })} defaultValue="">
          <option value="" disabled>
            choose the country...
          </option>
          <option value={Countries.Russia}>{Countries.Russia}</option>
          <option value={Countries.Spain}>{Countries.Spain}</option>
          <option value={Countries.France}>{Countries.France}</option>
        </select>
      </label>
      {errors.country && <span className="error">{ErrorName.country}</span>}
    </div>
  );
};
