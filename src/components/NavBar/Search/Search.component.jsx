import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import { StyledInput, IconContainer, SearchContainer } from './Search.styled';

const Search = ({ handleSearchChange }) => {
  const [keyWord, setKeyWord] = useState('');

  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const triggerChange = () => {
    if (keyWord) handleSearchChange(keyWord);
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
        id="search-cp"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={keyWord}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {keyWord && (
        <IconButton size="small">
          <CancelIcon
            fontSize="small"
            color="error"
            onClick={() => {
              setKeyWord('');
              // history.push('/');
              // handleSearchChange('Wizeline');
            }}
          />
        </IconButton>
      )}
    </SearchContainer>
  );
};

export default Search;
