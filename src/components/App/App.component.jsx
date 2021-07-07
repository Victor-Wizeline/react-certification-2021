import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import NavBar from '../NavBar';
import VideoPlayer from '../../pages/VideoPlayer';
import { useAppContext } from '../../state/AppProvider';

function App() {
  const [search, setSearch] = useState('Wizeline');
  const { state } = useAppContext();

  const onSearch = (term) => {
    setSearch(term);
  };

  return (
    <ThemeProvider theme={state.theme}>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <NavBar handleSearchChange={onSearch} />
            <Switch>
              <Route exact path="/">
                <HomePage search={search} />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/video/:id">
                <VideoPlayer />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
