import { useFormContext } from 'react-hook-form';
import { ErrorName } from '../../types/types';
import styles from './formdata.module.css';

export const InputFile = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.file}>
      <label>
        <input
          type="file"
          accept=".png,.jpg,.jpeg,.webp"
          {...register('image', {
            required: true,
          })}
        />
      </label>
      {errors.image && <div className={styles.error}>{ErrorName.image}</div>}
    </div>
  );
};
