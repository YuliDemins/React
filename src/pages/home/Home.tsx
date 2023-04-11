import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/card/Card';
import { ICat } from '../../types/api.interface';
import { CatsModal } from '../../components/catModal/CatsModal';
import { Search } from '../../components/search/Search';
import './home.css';
import { Preloader } from '../../components/preloader/Preloader';
import { useGetBreedsQuery } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { setId, setVisibleModal } from '../../store/idSlice';
import { useTypedSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../store/store';

// const baseURL = 'https://api.thecatapi.com/v1/breeds';
// const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

export const Home = () => {
  const dispatch = useAppDispatch();
  // const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const visibleModal = useTypedSelector((state: RootState) => state.IdSlice.visibleModal);
  // const [catId, setCatId] = useState<string>('');
  const [query, setQuery] = useState<string>(localStorage.getItem('search') || '');

  const { isLoading, data, error } = useGetBreedsQuery(query);

  console.log('Cards', data);
  const handleClick = (id: string) => {
    dispatch(setVisibleModal(true));
    dispatch(setId(id));
  };

  return (
    <>
      <Search setQuery={(value) => setQuery(value)} />
      <h1 className="main-title">Cats API</h1>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="cards">
          {data ? (
            data.map((cat: ICat) => {
              return <Card key={cat.id} {...cat} onClick={() => handleClick(cat.id)} />;
            })
          ) : (
            <span className="error">не найдено</span>
          )}
        </div>
      )}

      {visibleModal && <CatsModal />}
    </>
  );
};
