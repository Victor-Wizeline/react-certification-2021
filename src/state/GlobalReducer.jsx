import { storage } from '../utils/storage';

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        search: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_AUTH_USER': {
      const sessionData = action.payload;
      storage.set('sessionData', sessionData);
      return {
        ...state,
        authenticated: true,
        sessionData,
      };
    }
    case 'SET_DEAUTH_USER': {
      const sessionData = {};
      storage.set('sessionData', sessionData);
      return {
        ...state,
        authenticated: false,
        sessionData,
      };
    }
    default:
      return state;
  }
};

export default GlobalReducer;
