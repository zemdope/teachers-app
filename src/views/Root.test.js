import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root Component', () => {
  it('Renders the root component as unauthenticated', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentails are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'tak' } });
    fireEvent.change(password, { target: { value: 'nie' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated app', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@gmail.com' } });
    fireEvent.change(password, { target: { value: '1234' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
