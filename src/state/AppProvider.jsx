import React, { createContext, useContext, useReducer } from 'react';
import reducer from './GlobalReducer';

export const themes = {
  dark: {
    navBackground: '#2f2f2f',
    bodyBackground: '#313131',
    itemBackground: '#525252',
    fontColor: 'white',
    hoverColor: '#717171',
    shadowColor: '#212121',
  },
  light: {
    navBackground: '#A52A2AFF',
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

const initialState = {
  theme: getDefaultTheme(),
  search: 'Wizeline',
  error: null,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}

export { useAppContext };

export default AppProvider;
