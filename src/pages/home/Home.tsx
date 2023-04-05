import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/card/Card';
import { ICat } from '../../types/api.interface';
import { CatsModal } from '../../components/catModal/CatsModal';
import { Search } from '../../components/search/Search';
import './home.css';
import { Preloader } from '../../components/preloader/Preloader';

// const baseURL = 'https://api.thecatapi.com/v1/breeds?api_key='; //вывести породы
const baseURL = 'https://api.thecatapi.com/v1/breeds';
const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

export const Home = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [catId, setCatId] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);
  const [quantity, setQuantity] = useState(0);

  const URL = query ? `${baseURL}/search?q=${query}` : `${baseURL}?api_key=${key}`;

  useEffect(() => {
    // query
    //   ? axios
    //       .get(`${baseURL}/search?q=${query}`, {
    //         headers: {
    //           'x-api-key': key,
    //         },
    //       })
    //       .then((res) => {
    //         setCats(res.data);
    //         setIsLoading(false);
    //       })
    //   : axios.get(`${baseURL}?api_key=${key}`).then((res) => {
    //       setCats(res.data);
    //       setIsLoading(false);
    //     });

    axios
      .get(URL, {
        headers: {
          'x-api-key': key,
        },
      })
      .then((res) => {
        setCats(res.data);
        setIsLoading(false);
      });
  }, [query, page]);

  const handleClick = (id: string) => {
    setCatId(id);
    setVisibleModal(!visibleModal);
  };

  return (
    <>
      <Search setQuery={(value) => setQuery(value)} />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="cards">
          {cats.map((cat: ICat) => {
            return <Card key={cat.id} {...cat} onClick={() => handleClick(cat.id)} />;
          })}
        </div>
      )}

      {visibleModal && <CatsModal id={catId} setVisibleModal={setVisibleModal} />}
    </>
  );
};
