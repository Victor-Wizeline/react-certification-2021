import React, { useRef } from 'react';
import './Home.styles.css';

import videos from '../../mockData/youtube-videos-mock.json';

import VideoCardList from '../../components/VideoCardList';

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      <VideoCardList collection={videos} />
    </section>
  );
}

export default HomePage;
