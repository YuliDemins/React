import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import styles from './formdata.module.css';

export const InputBirthday = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.birthday}>
      <label>
        birthday:
        <input
          className={styles.input}
          type="date"
          {...register('birthday', {
            required: true,
            validate: (value) => value < new Date().toISOString().split('T')[0],
          })}
        />
      </label>
      {errors.birthday && <span className={styles.error}>{ErrorName.birthday}</span>}
    </div>
  );
};
