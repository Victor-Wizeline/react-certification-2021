import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';

const RelatedVideosCardList = ({ relatedVideos, fromFav }) => {
  const displayRelatedVideos = (rvideos) => {
    let cardVideos = [];
    if (rvideos) {
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
              fromFav={fromFav}
            />
          );
        });
    }
    return cardVideos;
  };

  return <div>{displayRelatedVideos(relatedVideos)}</div>;
};

export default RelatedVideosCardList;
