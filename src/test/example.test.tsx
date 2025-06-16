import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// This is just a simple example component to test
const ExampleComponent = () => {
  return <div>Example Test Component</div>;
};

describe('Example Test', () => {
  it('should render the component correctly', () => {
    render(<ExampleComponent />);
    expect(screen.getByText('Example Test Component')).toBeInTheDocument();
  });

  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });
});
