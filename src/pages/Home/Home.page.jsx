import React, { useRef } from 'react';
import './Home.styles.css';

import VideoCardList from '../../components/VideoCardList';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import LoadingOverlay from '../../components/LoadingOverlay';
import EmptyState from '../../components/VideoCardList/EmptyState';

function HomePage({ search }) {
  const sectionRef = useRef(null);
  const [loading, videos, error] = useYoutubeAPI(search);
  console.log(`${loading} ${error}`);
  console.log(videos);

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
