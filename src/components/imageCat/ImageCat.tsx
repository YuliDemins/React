import React from 'react';
import { FC } from 'react';
import { useGetImageQuery } from '../../store/api';
import { Preloader } from '../preloader/Preloader';

import './imageCat.css';

type imageProp = {
  id: string;
};

export const ImageCat: FC<imageProp> = ({ id }) => {
  const { isLoading, data } = useGetImageQuery(id);

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={'image'}>
      {data && data.length > 0 ? (
        <img src={data[0].url} alt="" />
      ) : (
        <span className={'error'}>картинка не найдена</span>
      )}
    </div>
  );
};
