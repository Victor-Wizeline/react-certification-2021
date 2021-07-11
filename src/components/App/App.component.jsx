import React from 'react';
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
  const { state } = useAppContext();

  return (
    <AuthProvider>
      <ThemeProvider theme={state.theme}>
        <BrowserRouter>
          <Layout>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/video/:id">
                <VideoPlayer />
              </Route>
              <Private exact path="/favorites">
                <SecretPage />
              </Private>
              <Private exact path="/favorites/:id">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
