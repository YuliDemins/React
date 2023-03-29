import { useFormContext } from 'react-hook-form';
import { Countries, ErrorName } from '../../types/types';
import styles from './formdata.module.css';

export const InputCountry = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.country}>
      <label>
        country:
        <select
          className={styles.input}
          {...register('country', { required: true })}
          defaultValue=""
        >
          <option value="" disabled>
            choose the country...
          </option>
          <option value={Countries.Russia}>{Countries.Russia}</option>
          <option value={Countries.Spain}>{Countries.Spain}</option>
          <option value={Countries.France}>{Countries.France}</option>
        </select>
      </label>
      {errors.country && <span className={styles.error}>{ErrorName.country}</span>}
    </div>
  );
};
