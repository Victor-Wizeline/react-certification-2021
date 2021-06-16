import React, { useRef } from 'react';
import './Home.styles.css';

import videos from '../../mockData/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';

function HomePage() {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      {videos.items.map((video, index) => {
        console.log(index);
        const { id, snippet } = video;
        const { thumbnails, description, channelTitle, title, publishedAt } = snippet;
        const img = thumbnails && thumbnails.high && thumbnails.high.url;
        if (id && id.videoId)
          return (
            <VideoCard
              id={id.videoId}
              img={img}
              title={title}
              description={description}
              channel={channelTitle}
              publishedAt={publishedAt}
            />
          );
        return null;
      })}
    </section>
  );
}

export default HomePage;
