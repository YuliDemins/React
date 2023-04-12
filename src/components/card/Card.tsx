import { FC, useEffect, useState } from 'react';
import { CatImage } from '../../types/api.interface';
import { ImageCat } from '../imageCat/ImageCat';
import { Preloader } from '../preloader/Preloader';
import styles from './card.module.css';

type CatProp = {
  id: string;
  name: string;
  temperament: string;
  onClick: () => void;
};

export const Card: FC<CatProp> = ({ id, name, temperament, onClick }) => {
  // const { id } = useTypedSelector((state: RootState) => state.IdSlice);
  // const imageURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';
  // const { isLoading, data, error } = useGetBreedsQuery(undefined);

  // const { isLoading, data } = useGetImageQuery(id);

  return (
    <div className={styles.card} onClick={onClick}>
      <ImageCat id={id} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </div>
  );
};
