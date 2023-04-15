import { ChangeEvent, FC, useState } from 'react';

import styles from './search.module.css';

type SearchProp = {
  setQuery: (value: string) => void;
};

export const Search: FC<SearchProp> = ({ setQuery }) => {
  const [value, setValue] = useState<string>(localStorage.getItem('search') || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
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
      <button className={styles['button-search']} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
