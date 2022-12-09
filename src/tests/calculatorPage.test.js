import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculate from '../components/calculator';

test('renders Calculate component', () => {
  const { asFragment } = render(<Calculate />);
  expect(asFragment()).toMatchSnapshot();
});

test('User can click on the buttons', () => {
  const handleClick = jest.fn();
  render(<button type="button" onClick={handleClick} className="input-button">AC</button>);
  const button = screen.getByText('AC');
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
