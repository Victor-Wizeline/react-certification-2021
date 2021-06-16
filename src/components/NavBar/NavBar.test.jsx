import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar.component';

describe('Render Navigation Bar', () => {
  test('it should have a search input textbox', () => {
    render(<NavBar />);
    const items = screen.getAllByRole('textbox');
    expect(items).toHaveLength(1);
  });

  test('it should have an icon login, change theme and menu button', () => {
    render(<NavBar />);
    const items = screen.queryAllByRole('button');
    expect(items).toHaveLength(3);
  });
});
