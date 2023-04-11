import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/hooks';
import { useGetImageQuery } from '../../store/api';
import { RootState } from '../../store/store';
import { CatImage, ICat } from '../../types/api.interface';
import { Preloader } from '../preloader/Preloader';
import styles from './card.module.css';

type CatProp = {
  id: string;
  name: string;
  temperament: string;
  onClick: () => void;
};

export const Card: FC<CatProp> = ({ id, name, temperament, onClick }) => {
  // const [breedImage, setBreedImage] = useState<string>('');
  // const [isLoading, setIsLoading] = useState(true);
  // const { id } = useTypedSelector((state: RootState) => state.IdSlice);
  // const imageURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';

  const { isLoading, data } = useGetImageQuery(id);

  
  // const [sourse, setSourse] = useState('');
  // if (data) setSourse(data[0].url);
  // useEffect(() => {
  //   axios
  //     .get<CatImage[]>(`${imageURL}${id}&limit=1`)
  //     .then((res) => {
  //       if (!res.data.length) {
  //         setIsLoading(false);
  //         setBreedImage('');
  //       } else setBreedImage(res.data[0].url);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error);
  //     });
  // }, [id]);

  return (
    <div className={styles.card} onClick={onClick}>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.image}>
          {data ? (
            <img src={data[0].url} alt={id} />
          ) : (
            <span className={styles.error}>картинка не найдена</span>
          )}
        </div>
      )}
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.temperament}>{temperament}</div>
      </div>
    </div>
  );
};
