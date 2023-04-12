import { Card } from '../../components/card/Card';
import { ICat } from '../../types/api.interface';
import { CatsModal } from '../../components/catModal/CatsModal';
import { Search } from '../../components/search/Search';
import './home.css';
import { Preloader } from '../../components/preloader/Preloader';
import { useGetBreedsQuery } from '../../store/api';
import { setId, setVisibleModal } from '../../store/idSlice';
import { useTypedSelector, useAppDispatch } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { Cards } from '../../components/Cards/Cards';

// const baseURL = 'https://api.thecatapi.com/v1/breeds';
// const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

export const Home = () => {
  const dispatch = useAppDispatch();
  const visibleModal = useTypedSelector((state: RootState) => state.IdSlice.visibleModal);

  return (
    <>
      <Search />
      <h1 className="main-title">Cats API</h1>
      {/* <Cards /> */}
      {/* {visibleModal && <CatsModal />} */}
    </>
  );
};
