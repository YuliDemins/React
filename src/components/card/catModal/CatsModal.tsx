import { FC, useEffect, useState } from 'react';
import { CatBreed } from '../../../types/api.interface';
import axios from 'axios';
import styles from './catmodal.module.css';

type CatModalProp = {
  id: string;
  setVisibleModal: (value: boolean) => void;
};

export const CatsModal: FC<CatModalProp> = ({ id, setVisibleModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [breedImage, setBreedImage] = useState<string>('');
  const baseURL = `https://api.thecatapi.com/v1/breeds/${id}?api_key=`; //вывести породы
  const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';
  const handleClick = () => setVisibleModal(false);

  const [cat, setCat] = useState<CatBreed>();

  useEffect(() => {
    axios.get(`${baseURL}${key}`).then((res) => {
      setCat(res.data);
      setIsLoading(false);
    });
  }, [baseURL]);

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
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.exit} onClick={handleClick}>
          {' '}
          x
        </div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className={styles.image}>
              <img src={breedImage} alt={id} />
            </div>
            <div className={styles.container}>
              <div className={styles.name}>{cat?.name}</div>
              <div className={styles.description}>{cat?.description}</div>
              <div className={styles.origin}>{cat?.origin}</div>
              <div className={styles.temperament}>{cat?.temperament}</div>
              <div className={styles.life}>{cat?.life_span} average life span</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
