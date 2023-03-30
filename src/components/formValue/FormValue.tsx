import { FC } from 'react';

import styles from './formvalue.module.css';

interface FormValueProp {
  data: {
    id: string;
    image: string;
    name: string;
    country: string;
    birthday: string;
    gender: string;
    agree: boolean;
  };
}

export const FormValue: FC<FormValueProp> = ({
  data: { id, image, name, country, birthday, gender, agree },
}) => {
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
