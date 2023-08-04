import { render } from '@testing-library/react';

import GenericList from '../components/GenericList';

it('The GenericList component renders the list provided as data correctly', () => {
  const data = [
    {
      id: 'first_id',
      value: 'first_value',
    },
    {
      id: 'second_id',
      value: 'second_value',
    },
  ];
  const { asFragment } = render(<GenericList data={data} />);
  expect(asFragment()).toMatchSnapshot();
});
