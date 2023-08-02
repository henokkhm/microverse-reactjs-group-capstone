import axios from 'axios';

const getRockets = async () => {
  const url = 'https://api.spacexdata.com/v4/rockets';

  const response = await axios.get(url);

  // Check if the response was successful
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  // Handle other non-successful status codes
  throw new Error(
    `Get rockets request failed with status code ${response.status}`,
  );
};

export default getRockets;
