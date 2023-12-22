import { render, screen } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import NavLink from './NavLink';

describe('NavLink component', () => {
  const props = {
    textContent: 'test',
    url: 'www.example.com',
  };

  beforeEach(() => {
    render(<NavLink {...props} />);
  });

  test('renders an li element', () => {
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
  });

  test('renders an anchor element', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  test('renders an anchor element with the correct text content', () => {
    const link = screen.getByText(props.textContent);
    expect(link).toBeInTheDocument();
  });

  test('renders an anchor element with the correct href', () => {
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', props.url);
  });
});
