import React from 'react';

import VideoCard from './VideoCard/VideoCard.component';
import { VideoCardListStyled } from './VideoCardList.styled';

const VideoCardList = (props) => {
  const displayVideos = (items) => {
    let cardVideos = [];
    if (items) {
      cardVideos = items.map((video) => {
        const { snippet } = video;
        const { thumbnails, description, channelTitle, title, publishedAt } = snippet;
        const img = thumbnails && thumbnails.high && thumbnails.high.url;
        return (
          <VideoCard
            key={video.etag}
            img={img}
            title={title}
            description={description}
            channel={channelTitle}
            publishedAt={publishedAt}
          />
        );
      });
    }
    return cardVideos;
  };

  return (
    <VideoCardListStyled role="list">
      {props.collection.items.length > 0 ? (
        displayVideos(props.collection.items)
      ) : (
        <h2>No videos were found</h2>
      )}
    </VideoCardListStyled>
  );
};

export default VideoCardList;
