import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';
import store from '../redux/store';

describe('Navigation links -', () => {
  test('clicking on "Rockets" link loads the Rockets page', async () => {
    // ARRANGE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    // ACT
    await act(() => userEvent.click(screen.getByTestId('navlink-rockets-page')));

    // ASSERT
    expect(screen.getByTestId('rockets-page-content')).toBeInTheDocument();
  });

  test('clicking on "Missions" link loads the Missions page', async () => {
    // ARRANGE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    // ACT
    await act(() => userEvent.click(screen.getByTestId('navlink-missions-page')));

    // ASSERT
    expect(screen.getByTestId('missions-page-content')).toBeInTheDocument();
  });

  test('clicking on the "My Profile" link loads the My Profile page', async () => {
    // ARRANGE
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    // ACT
    await act(() => userEvent.click(screen.getByTestId('navlink-my-profile-page')));

    // ASSERT
    expect(screen.getByTestId('my-profile-page-content')).toBeInTheDocument();
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
