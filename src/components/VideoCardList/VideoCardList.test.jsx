import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCardList from './VideoCardList.component';

import videos from '../../mockData/youtube-videos-mock.json';

describe('Render Some videos from the mock data', () => {
  test('it should appear No videos were found', () => {
    const collection = { items: [] };
    render(<VideoCardList collection={collection} />);
    expect(screen.getByText('No videos were found')).toBeInTheDocument();
  });

  test('It should render some video elements', () => {
    render(<VideoCardList collection={videos} />);

    expect(screen.queryByText('No videos were found')).not.toBeInTheDocument();
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(25);
  });
});
