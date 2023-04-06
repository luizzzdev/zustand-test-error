import { fireEvent, render } from '@testing-library/react';
import { Count } from '../Count/Count';

describe('main test', () => {
  const setup = () => {
    const view = render(<Count />);

    return {
      ...view,
    };
  };

  it('dummy', async () => {
    const screen = setup();
    await screen.findByText('0');
    fireEvent.click(screen.getByText('add'));

    await screen.findByText('1');
  });

  it('dummy 2', async () => {
    const screen = setup();
    await screen.findByText('0');
    fireEvent.click(screen.getByText('add'));

    await screen.findByText('1');
  });
});
