import { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import { useAppDispatch, useTypedSelector } from '../../hooks/hooks';
import { setValueSearch } from '../../store/cardSlice';

import './search.css';

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
    <div className={'form-search'}>
      <label htmlFor="search" className={'label-search'}>
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          className={'input-search'}
          id="search"
          onChange={(e) => handleChange(e)}
          value={query}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button className={'button-search'} onClick={handleClick}>
        Search
      </button>
    </div>
  );
};
