import { FC, useState } from 'react';
import { ICat } from '../../types/api.interface';
import styles from './api.module.css';

type CatProp = {
  onClick: () => void;
};

export const Cat: FC<ICat & CatProp> = ({
  id,
  name,
  description,
  temperament,
  image,
  origin,
  life_span,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <img src={image['url']} alt={id} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </div>
  );
};
