import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import PomodoroTimer from '../PomodoroTimer';

describe('PomodoroTimer Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with default 25:00 time', () => {
    render(<PomodoroTimer />);
    // Testing specific test ID if text causes issues with nested elements
    const display = screen.getByTestId('time-display');
    expect(display.textContent).toBe('25:00');
  });

  it('starts counting down when play is clicked', () => {
    render(<PomodoroTimer />);
    
    const playButton = screen.getByLabelText('Play');
    fireEvent.click(playButton);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    const display = screen.getByTestId('time-display');
    expect(display.textContent).toBe('24:59');
  });

  it('pauses when pause is clicked', () => {
    render(<PomodoroTimer />);
    
    const playButton = screen.getByLabelText('Play');
    fireEvent.click(playButton); 
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    
    const pauseButton = screen.getByLabelText('Pause');
    fireEvent.click(pauseButton); 
    
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    
    const display = screen.getByTestId('time-display');
    expect(display.textContent).toBe('24:59');
  });

  it('resets timer when reset is clicked', () => {
    render(<PomodoroTimer />);
    
    const playButton = screen.getByLabelText('Play');
    fireEvent.click(playButton);
    
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    
    const resetButton = screen.getByLabelText('Reset');
    fireEvent.click(resetButton);
    
    const display = screen.getByTestId('time-display');
    expect(display.textContent).toBe('25:00');
  });

  it('switches to short break mode correctly', () => {
    render(<PomodoroTimer />);
    
    const shortBreakBtn = screen.getByText(/short break/i);
    fireEvent.click(shortBreakBtn);
    
    const display = screen.getByTestId('time-display');
    expect(display.textContent).toBe('05:00');
  });
});
