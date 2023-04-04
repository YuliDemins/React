import { FC, useEffect, useState } from 'react';
import { ICat } from '../../types/api.interface';
import { Preloader } from '../preloader/Preloader';
import styles from './card.module.css';

type CatProp = {
  onClick: () => void;
};

export const Card: FC<ICat & CatProp> = ({
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
  const [breedImage, setBreedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=1`
      );
      const data = await response.json();
      console.log(data[0].url);
      setBreedImage(data[0].url);
      setIsLoading(false);
    };

    fetchImage();
  }, [id]);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.image}>
        {isLoading ? <Preloader /> : <img src={breedImage} alt={id} />}
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </div>
  );
};
