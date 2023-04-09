import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import styles from './search.module.css';

type SearchProp = {
  setQuery: (value: string) => void;
};

export const Search: FC<SearchProp> = ({ setQuery }) => {
  const LsSearch = localStorage.getItem('search');
  const [value, setValue] = useState<string>(LsSearch || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuery(value);
    localStorage.setItem('search', value);
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
          value={value}
        />
      </label>
      <button className={styles['button-search']} onClick={(e) => handleClick(e)}>
        Search
      </button>
    </div>
  );
};
