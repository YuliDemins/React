import { useEffect, useState } from 'react';
import { Search } from '../../components/search/Search';
import { ICat } from '../../types/api.interface';
import styles from './api.module.css';
import { Cat } from './Cat';
import { CatsModal } from './CatsModal';

export const Api = () => {
  const [cats, setCats] = useState<ICat[]>([]);

  const [visible, setVisible] = useState(false);

  const [catId, setCatId] = useState<string>('');

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [quantity, setQuantity] = useState(0);

  const baseURL = 'https://api.thecatapi.com/v1/breeds?api_key='; //вывести породы
  const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

  // https://api.thecatapi.com/v1/breeds/search?q={query} для поиска

  useEffect(() => {
    fetch(`${baseURL}${key}/search?q=${query}&limit=${limit}&page=${page - 1}`)
      .then((res) => res.json())
      .then((data: ICat[]) => {
        setCats(data);
        // setQuery(query);
      });

    // setQuantity(nbPages);
  }, [query, page]);
  // };

  const handleClick = (id: string) => {
    setCatId(id);
    setVisible(!visible);
  };

  return (
    <>
      <h1 className="main-title">API Cats</h1>
      <Search setQuery={(value) => setQuery(value)} />
      <div className={styles.cards}>
        {cats.map((cat) => {
          return <Cat key={cat.id} {...cat} onClick={() => handleClick(cat.id)} />;
        })}
      </div>
      {visible && <CatsModal id={catId} setVisible={setVisible} />}
    </>
  );
};
