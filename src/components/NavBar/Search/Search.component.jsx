import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledInput, IconContainer, SearchContainer } from './Search.styled';

const Search = ({ handleSearchChange }) => {
  const history = useHistory();
  const [keyWord, setKeyWord] = useState('');

  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const triggerChange = () => {
    if (!keyWord) history.push('/');
    else handleSearchChange(keyWord);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerChange();
    }
  };

  return (
    <SearchContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <StyledInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={keyWord}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </SearchContainer>
  );
};

export default Search;
