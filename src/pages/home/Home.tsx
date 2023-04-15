import { CatsModal } from '../../components/catModal/CatsModal';
import { Search } from '../../components/search/Search';
import './home.css';
import { useTypedSelector } from '../../hooks/hooks';
import { RootState } from '../../store/store';
import { Cards } from '../../components/Cards/Cards';

export const Home = () => {
  const visibleModal = useTypedSelector((state: RootState) => state.cardSlice.visibleModal);

  return (
    <>
      <Search />
      <h1 className="main-title">Cats API</h1>
      <Cards />
      {visibleModal && <CatsModal />}
    </>
  );
};
