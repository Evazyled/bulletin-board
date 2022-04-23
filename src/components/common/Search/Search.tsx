/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FoundButton from '../FoundButton/FoundButton';

// const Search = () => <input type="search" className={style.content} />;
import style from './Search.module.scss';
import SearchIcon from './SearchIcon';

const Search = () => (
  <div className={style.content}>
    <SearchIcon />
    <input type="search" />
    <FoundButton title="Искать" />
  </div>
);

export default Search;
