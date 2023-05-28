import { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { setValueSearch } from '../../store/cardSlice';

import styles from './search.module.css';

export const Search: FC = () => {
  const dispatch = useAppDispatch();
  const { value } = useTypedSelector((state) => state.cardSlice);
  const [query, setQuery] = useState<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    dispatch(setValueSearch(query));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(setValueSearch(query));
    }
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
          onKeyPress={handleKeyPress}
        />
      </label>
      <button className={styles['button-search']} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
