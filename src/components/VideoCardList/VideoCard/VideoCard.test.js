import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

import videoData from '../../../mockData/youtube-videos-mock.json';

describe('Render VideoData', () => {
  const video = videoData.items[0];

  const { id, snippet } = video;
  const { thumbnails, description, channelTitle, title, publishedAt } = snippet;
  const img = thumbnails && thumbnails.high && thumbnails.high.url;

  test('It Should render one VideoCard', () => {
    render(
      <VideoCard
        id={id.videoId}
        img={img}
        title={title}
        description={description}
        channel={channelTitle}
        publishedAt={publishedAt}
      />
    );

    const items = screen.getAllByRole('heading');
    expect(items).toHaveLength(1);
  });
});
