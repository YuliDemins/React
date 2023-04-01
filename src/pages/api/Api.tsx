import { useEffect, useState } from 'react';
import { ICat } from '../../types/api.interface';
import styles from './api.module.css';
import { Cat } from './Cat';
import { CatsModal } from './CatsModal';

export const Api = () => {
  const [cats, setCats] = useState<ICat[]>([]);

  const [visible, setVisible] = useState(false);

  const [catId, setCatId] = useState<string>('');

  const baseURL = 'https://api.thecatapi.com/v1/breeds?api_key='; //вывести породы
  const key = 'live_17XhwfmLQSNM2KpZWSqhGwwknYeHIcrn8hIy1feWpXPuQngIucaoCbdM6i5NMr7r';

  useEffect(() => {
    fetch(`${baseURL}${key}`)
      .then((res) => res.json())
      .then((data: ICat[]) => {
        setCats(data);
      });
  }, []);

  const handleClick = (id: string) => {
    setCatId(id);
    setVisible(!visible);
  };

  return (
    <>
      <h1 className="main-title">API Cats</h1>
      <div className={styles.cards}>
        {cats.map((cat, index) => {
          if (index !== 31 && index !== 30 && index !== 40 && index !== 41) {
            return <Cat key={cat.id} {...cat} onClick={() => handleClick(cat.id)} />;
          }
        })}
      </div>
      {visible && <CatsModal id={catId} setVisible={setVisible} />}
    </>
  );
};
