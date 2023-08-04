import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

it('The Navbar component renders correctly', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
