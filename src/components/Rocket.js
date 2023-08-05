import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toggleRocketReservation } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Rocket.module.css';

function Rocket({
  id, name, description, imgUrl, isReserved,
}) {
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(toggleRocketReservation({ id }));

  const reserveRocketBtn = (
    <button
      className={styles.reserveRocketBtn}
      type="button"
      onClick={handleButtonClick}
    >
      Reserve Rocket
    </button>
  );

  const cancelRocketReservationBtn = (
    <button
      className={styles.cancelRocketReservationBtn}
      type="button"
      onClick={handleButtonClick}
    >
      Cancel Reservation
    </button>
  );

  return (
    <li className={styles.rocketCard}>
      <div className={styles.rocketImgWrapper}>
        <img className={styles.rocketImg} src={imgUrl} alt={`${name} rocket`} />
      </div>
      <div className={styles.rocketCardBody}>
        <h3 className={styles.rocketName}>{name}</h3>
        <p className={styles.rocketDescription}>
          {isReserved && (
            <span className={styles.rocketReservedBadge}>Reserved</span>
          )}
          {description}
        </p>
        {isReserved ? cancelRocketReservationBtn : reserveRocketBtn}
      </div>
    </li>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
};

export default Rocket;
