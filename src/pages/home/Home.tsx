import { CatsModal } from '../../components/catModal/CatsModal';
import { Search } from '../../components/search/Search';
import './home.css';
import { useTypedSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { Cards } from '../../components/Cards/Cards';

// const baseURL = 'https://api.thecatapi.com/v1/breeds';
// const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

export const Home = () => {
  const visibleModal = useTypedSelector((state: RootState) => state.IdSlice.visibleModal);

  return (
    <>
      <Search />
      <h1 className="main-title">Cats API</h1>
      <Cards />
      {visibleModal && <CatsModal />}
    </>
  );
};
