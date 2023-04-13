import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { CatImage, ICat } from '../../types/api.interface';
import { Preloader } from '../preloader/Preloader';
import styles from './card.module.css';

export const Card: FC<ICat> = ({ id, name, temperament, reference_image_id }) => {
  const [breedImage, setBreedImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const imageURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';
  // const imageURL = 'https://cdn2.thecatapi.com/images/';

  useEffect(() => {
    axios
      .get<CatImage[]>(`${imageURL}${id}&limit=1`)
      .then((res) => {
        if (!res.data.length) {
          setIsLoading(false);
          setBreedImage('');
        } else {
          setBreedImage(res.data[0].url);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.image}>
          {breedImage ? (
            <img src={breedImage} alt={id} />
          ) : (
            <span className={styles.error}>картинка не найдена</span>
          )}
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </>
  );
  // return (
  //   <>
  //       <div className={styles.image}>
  //         <img src={`${imageURL}${reference_image_id}.jpg`} alt={id} />
  //       </div>
  //     <div className={styles.info}>
  //       <div className={styles.name}>{name}</div>
  //       <div className={styles.temperament}>{temperament}</div>
  //     </div>
  //   </>
  // );
};
