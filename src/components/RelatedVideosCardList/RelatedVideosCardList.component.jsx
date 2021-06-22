import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';

const RelatedVideosCardList = ({ related }) => {
  const displayRelatedVideos = (rvideos) => {
    let cardVideos = [];
    if (related) {
      cardVideos = rvideos?.items
        ?.filter((e) => e.snippet)
        .map(({ id, snippet }) => {
          return (
            <RelatedVideoCard
              key={id.videoId}
              title={snippet?.title}
              description={snippet?.description}
              thumbnail={snippet?.thumbnails.medium.url}
              id={id.videoId}
            />
          );
        });
    }
    return cardVideos;
  };

  return <div>{displayRelatedVideos(related)}</div>;
};

export default RelatedVideosCardList;
