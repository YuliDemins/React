import { FC, useState } from 'react';
import { useGetImageQuery } from '../../store/api';
import { Preloader } from '../preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';

import styles from './imageCat.module.css';
import { RootState } from '../../store/store';
import { useTypedSelector } from '../../hooks/hooks';


export const ImageCat: FC = () => {
  const { id } = useTypedSelector((state: RootState) => state.IdSlice);
  const { isLoading, data } = useGetImageQuery(id);
  // const [sourse, setSourse] = useState('');
  // if (data) setSourse(data[0].url);
  console.log('image', id);
  return isLoading ? (
    <Preloader />
  ) : (
    <div className={styles.image}>
      {data ? (
        <img src={data[0].url} alt="" />
      ) : (
        <span className={styles.error}>картинка не найдена</span>
      )}
    </div>
  );
  // return (
  //   <div className={styles.image}>
  //     <img src={data[0].url} alt="" />
  //   </div>
  // );
};
