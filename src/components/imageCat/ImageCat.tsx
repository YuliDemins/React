import { FC } from 'react';
import { useGetImageQuery } from '../../store/api';
import { Preloader } from '../preloader/Preloader';

import styles from './imageCat.module.css';
import { RootState } from '../../store/store';
import { useTypedSelector } from '../../hooks/hooks';

type imageProp = {
  id: string;
};

export const ImageCat: FC<imageProp> = ({ id }) => {
  // const { id } = useTypedSelector((state: RootState) => state.IdSlice);
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
