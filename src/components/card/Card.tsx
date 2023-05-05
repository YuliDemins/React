import { FC } from 'react';
import { ImageCat } from '../imageCat/ImageCat';
import styles from './card.module.css';

type CatProp = {
  id: string;
  name: string;
  temperament: string;
};

export const Card: FC<CatProp> = ({ id, name, temperament }) => {
  return (
    <>
      <ImageCat id={id} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </>
  );
};
