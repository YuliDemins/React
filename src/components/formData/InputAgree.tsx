import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import styles from './formdata.module.css';

export const InputAgree = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.checkbox}>
      <label>
        <input
          className={styles.agree}
          type="checkbox"
          {...register('agree', { required: true })}
        />
        agree
      </label>
      {errors.agree && <span className={styles.error}>{ErrorName.agree}</span>}
    </div>
  );
};
