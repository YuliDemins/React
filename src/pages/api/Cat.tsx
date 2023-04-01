import { FC, useEffect, useState } from 'react';
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
  reference_image_id,
  origin,
  life_span,
  onClick,
}) => {
  const [breedImage, setBreedImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=1`
      );
      const data = await response.json();
      console.log(data[0].url);
      setBreedImage(data[0].url);
    };

    fetchImage();
  }, [id]);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        <img src={breedImage} alt={id} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </div>
  );
};
