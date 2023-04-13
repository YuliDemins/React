import { Cards } from '../../components/cards/Cards';
import { Search } from '../../components/search/Search';
import './home.css';

export const Home = () => {
  return (
    <>
      <h1 className="main-title">Home page</h1>
      <Search />
      <Cards />
    </>
  );
};
