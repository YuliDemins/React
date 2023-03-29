import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import styles from './formdata.module.css';

export const InputGender = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.gender}>
      <div className={styles.switcher}>
        <label>
          <input
            type="radio"
            value="male"
            className={styles['switcher-input']}
            {...register('gender', { required: true })}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            className={styles['switcher-input']}
            {...register('gender', { required: true })}
          />
          Female
        </label>
      </div>
      {errors.gender && <span className={styles.error}>{ErrorName.gender}</span>}
    </div>
  );
};
