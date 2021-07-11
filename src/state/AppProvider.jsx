import React, { createContext, useContext, useReducer } from 'react';
import reducer from './GlobalReducer';
import { storage } from '../utils/storage';

export const themes = {
  dark: {
    navBackground: '#2f2f2f',
    sideBarBgColor: '#9a9a9a',
    bodyBackground: '#313131',
    itemBackground: '#525252',
    fontColor: 'white',
    hoverColor: '#717171',
    shadowColor: '#212121',
  },
  light: {
    navBackground: '#A52A2AFF',
    sideBarBgColor: '#ffffff',
    bodyBackground: '#ebe1e1',
    itemBackground: '#fefefe',
    fontColor: 'black',
    hoverColor: '#fcdfdf',
    shadowColor: '#cecece',
  },
};

const getDefaultTheme = () => {
  let theme = themes.light;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = themes.dark;
  }
  return theme;
};

const getInitialState = () => {
  const sessionData = storage.get('sessionData') || {};
  return {
    theme: getDefaultTheme(),
    search: 'Wizeline',
    authenticated: Object.keys(sessionData).length > 0,
    error: null,
  };
};

const AppContext = createContext();

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use "useAppContext" without a AppProvider!`);
  }
  return context;
}

function AppProvider({ children }) {
  const initialState = getInitialState();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}

export { useAppContext };

export default AppProvider;
