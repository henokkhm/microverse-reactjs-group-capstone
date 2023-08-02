import { useSelector } from 'react-redux';

import Rocket from './Rocket';

function RocketsList() {
  const { rocketsList } = useSelector((store) => store.rockets);

  return (
    <div>
      <h3>RocketsList Component</h3>
      {rocketsList.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          type={rocket.type}
          imgUrl={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
}

export default RocketsList;
