import { ChangeEvent, useEffect, useRef, useState } from 'react';

import './search.css';

export const Search = () => {
  const LsSearch = localStorage.getItem('search');
  const [value, setValue] = useState<string>(LsSearch || '');

  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current || '');
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    localStorage.setItem('search', value);
  };

  return (
    <div className="form-search">
      <label htmlFor="search" className="label-search">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          className="input-search"
          id="search"
          onChange={handleChange}
          value={value}
        />
      </label>
      <button className="button-search" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
