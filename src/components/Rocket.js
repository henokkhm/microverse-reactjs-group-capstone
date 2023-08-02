import PropTypes from 'prop-types';

import styles from '../styles/Rocket.module.css';

function Rocket({ name, description, imgUrl }) {
  return (
    <div className={styles.rocketCard}>
      <div className={styles.rocketImgWrapper}>
        <img className={styles.rocketImg} src={imgUrl} alt={`${name} rocket`} />
      </div>
      <div className={styles.rocketCardBody}>
        <h3 className={styles.rocketName}>{name}</h3>
        <p className={styles.rocketDescription}>{description}</p>
        <button className={styles.reserveRocketBtn} type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Rocket;
