import { useSelector } from 'react-redux';

import Rocket from './Rocket';
import styles from '../styles/RocketList.module.css';

function RocketsList() {
  const { rocketsList, isLoadingRockets, errorLoadingRockets } = useSelector(
    (store) => store.rockets,
  );

  if (isLoadingRockets) {
    return <div className={styles.loading}>Loading rockets...</div>;
  }

  if (errorLoadingRockets) {
    return (
      <div className={styles.error}>
        Something went wrong! Please try again later.
      </div>
    );
  }

  return (
    <ul className={styles.rocketList}>
      {rocketsList.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          imgUrl={rocket.flickr_images[0]}
          isReserved={rocket.isReserved}
        />
      ))}
    </ul>
  );
}

export default RocketsList;
