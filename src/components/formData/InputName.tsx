import { useFormContext } from 'react-hook-form';
import { ErrorName, IFormValues } from '../../types/types';
import styles from './formdata.module.css';

export const InputName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormValues>();

  return (
    <div className={styles.name}>
      <label>
        Name:
        <input
          className={styles.input}
          placeholder="Name"
          {...register('name', {
            required: ErrorName.field,
            pattern: {
              value: /^[А-ЯЁA-Z][а-яёa-z\-]*$/,
              message: ErrorName.name,
            },
            minLength: 2,
          })}
        />
      </label>
      {errors.name && <span className={styles.error}>{errors.name.message}</span>}
    </div>
  );
};
