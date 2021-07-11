import React, { useRef } from 'react';
import './Home.styles.css';

import VideoCardList from '../../components/VideoCardList';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import LoadingOverlay from '../../components/LoadingOverlay';
import EmptyState from '../../components/VideoCardList/EmptyState';
import { useAppContext } from '../../state/AppProvider';

const MAX_RESULTS = 10;

function HomePage() {
  const { state } = useAppContext();
  const sectionRef = useRef(null);
  const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${state.search}`;

  const [loading, videos, error] = useYoutubeAPI(request);

  if (loading) return <LoadingOverlay />;
  if (error && !loading) return <EmptyState />;

  return (
    <section className="homepage" ref={sectionRef}>
      {videos && videos.length !== 0 && videos?.items?.length !== 0 ? (
        <VideoCardList collection={videos.items} />
      ) : (
        <EmptyState />
      )}
    </section>
  );
}

export default HomePage;
