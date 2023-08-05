import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';

it('The Header component renders as expected', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
