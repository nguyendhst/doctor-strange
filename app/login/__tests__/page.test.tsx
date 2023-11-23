import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../page'; 

describe('Login', () => {
  it('should render the component and respond to user interaction', () => {
    render(<Login />);

    // Check if certain elements are in the document
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByText('Enter username & password to login')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    // Simulate user event
    userEvent.type(screen.getByLabelText('Email'), 'test@example.com');
    userEvent.type(screen.getByLabelText('Password'), 'password');
    userEvent.click(screen.getByText('Sign In'));

    // Add your assertions here based on the expected behavior after clicking the Sign In button
	// TODO
  });
});