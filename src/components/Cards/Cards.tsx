import React from 'react';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { useGetBreedsQuery } from '../../store/api';
import { updateState } from '../../store/cardSlice';
import { RootState } from '../../store/store';
import { ICat } from '../../types/api.interface';
import { Card } from '../card/Card';
import { Preloader } from '../preloader/Preloader';
import './cards.css';

export const Cards = () => {
  const dispatch = useAppDispatch();
  const { value } = useTypedSelector((state: RootState) => state.cardSlice);

  const { isLoading, data } = useGetBreedsQuery(value);

  const handleClick = (id: string) => {
    dispatch(updateState({ idState: id, visibleModal: true }));
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className={'cards'}>
      {data ? (
        data.map((cat: ICat) => {
          return (
            <div key={cat.id} className={'card'} onClick={() => handleClick(cat.id)}>
              <Card {...cat} />
            </div>
          );
        })
      ) : (
        <span className="error">не найдено</span>
      )}
    </div>
  );
};
