import { useSelector } from 'react-redux';

import Rocket from './Rocket';
import styles from '../styles/RocketList.module.css';

function RocketsList() {
  const { rocketsList } = useSelector((store) => store.rockets);

  return (
    <div className={styles.rocketList}>
      {rocketsList.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          imgUrl={rocket.flickr_images[0]}
        />
      ))}
    </div>
  );
}

export default RocketsList;
