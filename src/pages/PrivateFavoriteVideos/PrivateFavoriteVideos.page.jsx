import React, { useRef } from 'react';
import { storage } from '../../utils/storage';
import VideoCardList from '../../components/VideoCardList';

function PrivateFavoriteVideosPage() {
  const sectionRef = useRef(null);
  const videos = storage.get('favorites') || [];
  return (
    <section className="homepage" ref={sectionRef}>
      <VideoCardList collection={videos} />
    </section>
  );
}

export default PrivateFavoriteVideosPage;
