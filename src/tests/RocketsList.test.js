import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import RocketsList from '../components/RocketsList';
import { getRocketsFromAPI } from '../redux/rockets/rocketsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RocketsList component', () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  test('renders as expected', async () => {
    // ARRANGE
    const mockRockets = [
      {
        id: 'id-1',
        name: '[Mock-data] Falcon 1',
        description: 'Mock Description Falcon 1',
        flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
        isReserved: false,
      },
      {
        id: 'id-2',
        name: '[Mock-data] Falcon 9',
        description: 'Mock Description Falcon 9',
        flickr_images: [
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        ],
        isReserved: false,
      },
    ];

    fetchMock.mockResponse(JSON.stringify(mockRockets));

    const store = mockStore({
      rockets: {
        rocketsList: mockRockets,
        isLoadingRockets: false,
        errorLoadingRockets: false,
      },
    });

    await store.dispatch(getRocketsFromAPI());

    // ACT
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <RocketsList />
        </BrowserRouter>
      </Provider>,
    );

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });
});
