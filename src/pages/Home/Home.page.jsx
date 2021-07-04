import React, { useRef } from 'react';
import './Home.styles.css';

import VideoCardList from '../../components/VideoCardList';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import LoadingOverlay from '../../components/LoadingOverlay';
import EmptyState from '../../components/VideoCardList/EmptyState';

const MAX_RESULTS = 25;

function HomePage({ search }) {
  const sectionRef = useRef(null);
  const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${search}`;

  const [loading, videos, error] = useYoutubeAPI(request);

  if (loading) return <LoadingOverlay />;
  if (error && !loading) return <EmptyState />;

  return (
    <section className="homepage" ref={sectionRef}>
      {videos && videos.length !== 0 ? (
        <VideoCardList collection={videos} />
      ) : (
        <EmptyState />
      )}
    </section>
  );
}

export default HomePage;
