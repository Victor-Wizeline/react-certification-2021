import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { StyledInput, IconContainer, SearchContainer } from './Search.styled';
import { useAppContext } from '../../../state/AppProvider';

const Search = () => {
  const { dispatch } = useAppContext();
  const history = useHistory();

  const [keyWord, setKeyWord] = useState('');

  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const triggerChange = () => {
    dispatch({
      type: 'SET_SEARCH_TERM',
      payload: keyWord,
    });
    history.push('/');
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
              dispatch({
                type: 'SET_SEARCH_TERM',
                payload: keyWord,
              });
            }}
          />
        </IconButton>
      )}
    </SearchContainer>
  );
};

export default Search;
