import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge Component Checks', () => {
  it('renders the online status text correctly', () => {
    render(<StatusBadge status="online" />);
    
    const badge = screen.getByTestId('status-badge');
    expect(badge).toHaveTextContent('System Online');
  });

  it('renders the offline status text correctly', () => {
    render(<StatusBadge status="offline" />);
    
    const badge = screen.getByTestId('status-badge');
    expect(badge).toHaveTextContent('System Offline');
  });
});