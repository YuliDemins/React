import { FC } from 'react';
import { useGetImageQuery } from '../../store/api';
import { Preloader } from '../preloader/Preloader';

import styles from './imageCat.module.css';

type imageProp = {
  id: string;
};

export const ImageCat: FC<imageProp> = ({ id }) => {
  const { isLoading, data } = useGetImageQuery(id);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={styles.image}>
      {data && data.length > 0 ? (
        <img src={data[0].url} alt="" />
      ) : (
        <span className={styles.error}>картинка не найдена</span>
      )}
    </div>
  );
};
