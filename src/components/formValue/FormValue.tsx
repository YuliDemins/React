import { FC } from 'react';
import { IFormData } from '../../types/types';

import styles from './formvalue.module.css';

export const FormValue: FC<IFormData> = ({ id, image, name, country, birthday, gender, agree }) => {
  return (
    <div className={styles.value} id={id}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles['value-item']}>Name: {name}</div>
      <div className={styles['value-item']}>Country: {country}</div>
      <div className={styles['value-item']}>Birthday: {birthday}</div>
      <div className={styles['value-item']}>Gender: {gender}</div>
      <div className={styles['value-item']}>Agree: {agree ? 'yes' : 'no'}</div>
    </div>
  );
};
