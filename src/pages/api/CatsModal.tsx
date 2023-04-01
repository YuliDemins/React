import { FC, useEffect, useState } from 'react';
import { dataCards } from '../../dataCards';
import { CatBreed } from '../../types/api.interface';
import styles from './api.module.css';

type CatModalProp = {
  id: string;
  setVisible: (value: boolean) => void;
};

export const CatsModal: FC<CatModalProp> = ({
  id,
  // name,
  // description,
  // temperament,
  // image,
  // origin,
  // life_span,
  setVisible,
}) => {
  const baseURL = `https://api.thecatapi.com/v1/breeds/${id}?api_key=`; //вывести породы
  const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';
  const handleClick = () => setVisible(false);

  const [cat, setCat] = useState<CatBreed>();

  useEffect(() => {
    fetch(`${baseURL}${key}`)
      .then((res) => res.json())
      .then((data: CatBreed) => {
        setCat(data);
      });
  }, [baseURL]);

  return (
    <div className={styles.overlay}>
      <div className={styles.exit} onClick={handleClick}>
        Х
      </div>
      <div className={styles.modal}>{cat?.name}</div>
    </div>
  );
};
