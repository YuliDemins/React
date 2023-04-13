import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { CatBreed, CatImage } from '../../types/api.interface';
import axios from 'axios';
import styles from './catmodal.module.css';
import { Preloader } from '../preloader/Preloader';

type CatModalProp = {
  id: string;
  setVisibleModal: (value: boolean) => void;
};

export const CatsModal: FC<CatModalProp> = ({ id, setVisibleModal }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [breedImage, setBreedImage] = useState('');

  const breedURL = `https://api.thecatapi.com/v1/breeds/${id}?api_key=`;
  const imageURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';
  const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

  const handleClick = () => setVisibleModal(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: MouseEvent) => {
    if (overlayRef.current == event.target) setVisibleModal(false);
  };

  const [cat, setCat] = useState<CatBreed>();

  useEffect(() => {
    axios
      .get<CatBreed>(`${breedURL}${key}`)
      .then((res) => {
        setCat(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [breedURL]);

  useEffect(() => {
    axios
      .get<CatImage[]>(`${imageURL}${id}&limit=1`)
      .then((res) => {
        if (!res.data.length) return;
        else setBreedImage(res.data[0].url);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [id]);

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.info}>
        <div className={styles.modal}>
          <button className={styles.exit} onClick={handleClick}>
            &times;
          </button>
          {isLoading ? (
            <Preloader />
          ) : (
            <>
              <div className={styles.image}>
                {breedImage ? (
                  <img src={breedImage} alt={cat?.name} />
                ) : (
                  <span className={styles.error}>картинка не найдена</span>
                )}
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
    </div>
  );
};
