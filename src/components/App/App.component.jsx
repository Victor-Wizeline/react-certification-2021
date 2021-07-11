import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import PrivateFavoriteVideosPage from '../../pages/PrivateFavoriteVideos';
import Private from '../Private';
import Layout from '../Layout';
import NavBar from '../NavBar';
import VideoPlayer from '../../pages/VideoPlayer';
import { useAppContext } from '../../state/AppProvider';

function App() {
  const { state } = useAppContext();

  return (
    <ThemeProvider theme={state.theme}>
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/video/:id">
              <VideoPlayer />
            </Route>
            <Private exact path="/favorites">
              <PrivateFavoriteVideosPage />
            </Private>
            <Private exact path="/favorites/:id">
              <VideoPlayer />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
