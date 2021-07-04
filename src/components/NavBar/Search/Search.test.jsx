import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search.component';

describe('Render Input', () => {
  test('it should render a search bar', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Search…')).toBeInTheDocument();
  });
});
