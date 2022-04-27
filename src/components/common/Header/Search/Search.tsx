import React, { useState } from 'react';
import FoundButton from '../../FoundButton/FoundButton';
import style from './Search.module.scss';
import SearchIcon from './SearchIcon';

const Search = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div className={style.content}>
      <SearchIcon />
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      <FoundButton title="Искать" />
    </div>
  );
};

export default Search;
