import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { setValueSearch } from '../../store/filterSlice';

import styles from './search.module.css';

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { value } = useTypedSelector((state) => state.filter);
  const [query, setQuery] = useState<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setValueSearch(query));
  };

  return (
    <div className={styles['form-search']}>
      <label htmlFor="search" className={styles['label-search']}>
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          className={styles['input-search']}
          id="search"
          onChange={(e) => handleChange(e)}
          value={query}
        />
      </label>
      <button className={styles['button-search']} onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
};
