import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { CatBreed, CatImage } from '../../types/api.interface';
import axios from 'axios';
import styles from './catmodal.module.css';
import { Preloader } from '../preloader/Preloader';
import { useGetBreedsQuery, useGetCardQuery, useGetImageQuery } from '../../store/api';
import { ImageCat } from '../imageCat/ImageCat';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useTypedSelector, useAppDispatch } from '../../hooks/hooks';
import { setId, setVisibleModal } from '../../store/idSlice';

// const breedURL = `https://api.thecatapi.com/v1/breeds/${id}?api_key=`;
// const imageURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';
// const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';
// type Prop = {
//   id: string;
// };

export const CatsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { id, visibleModal } = useTypedSelector((state: RootState) => state.IdSlice);
  const { isLoading, data, error } = useGetCardQuery(id);
  console.log('modal', id);
  // const [sourse, setSourse] = useState('');
  // useEffect (()=> {
  //   if (data) setSourse(data[0].url);
  // }, [id])
  

  const handleClick = () => {
    dispatch(setVisibleModal(false));
    // dispatch(setId(''));
  };

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: MouseEvent) => {
    if (overlayRef.current == event.target) {
      dispatch(setVisibleModal(false));
      // dispatch(setId(''));
    }
  };

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
              <ImageCat />
              <div className={styles.container}>
                <div className={styles.name}>{data?.name}</div>
                <div className={styles.description}>{data?.description}</div>
                <div className={styles.origin}>{data?.origin}</div>
                <div className={styles.temperament}>{data?.temperament}</div>
                <div className={styles.life}>{data?.life_span} average life span</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
