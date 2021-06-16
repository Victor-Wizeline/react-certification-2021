import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { StyledInput, IconContainer, SearchContainer } from './Search.styled';

const Search = ({ value }) => {
  return (
    <SearchContainer>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <StyledInput
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={value}
      />
    </SearchContainer>
  );
};

export default Search;
